# items-server/Dockerfile
# Use a Node.js base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the server listens on
EXPOSE 3002

# Command to run the server
CMD ["node", "users.js"]