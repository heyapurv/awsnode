# Use the official Node.js image from Docker Hub
FROM node:20

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other project files
COPY . .

# Expose the port the app runs on (e.g., Express uses 3000)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
