# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies, including Playwright browsers
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Install Playwright browsers
RUN npx playwright install

# Expose the port your app runs on
EXPOSE 5000

# Define the command to run your app
CMD ["npm", "start"]
