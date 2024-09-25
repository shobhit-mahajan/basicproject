# Use the official Node.js image as the base
FROM node:20

# Install necessary dependencies
RUN apt-get update && apt-get install -y \
    libglib2.0-0 \
    libnss3 \
    libxss1 \
    libgconf-2-4 \
    libgtk-3-0 \
    libgdk-pixbuf2.0-0 \
    libatspi2.0-0 \
    libenchant-2-2 \
    libsecret-1-0 \
    libmanette-0.2-0 \
    libgstgl-1.0-0 \
    libgstcodecparsers-1.0-0 \
    libgles2 \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Install Playwright browsers
RUN npx playwright install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Command to run your application
CMD ["npm", "start"]
