# Use a Node base image with Playwright dependencies
FROM mcr.microsoft.com/playwright:focal

# Set the working directory
WORKDIR /app

# Copy all project files to the container
COPY . .

# Install dependencies
RUN npm install

# Ensure Playwright is installed
RUN npx playwright install

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
