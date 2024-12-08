FROM node:20

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 8081

# CMD ["node","app/server.js"]

# # Use the official Node.js image from Docker Hub
# FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application’s code into the container
COPY . .

# Expose the port that your app will run on
EXPOSE 8081

# Start the app
# CMD ["npm", "start"]
CMD ["node","app/server.js"]