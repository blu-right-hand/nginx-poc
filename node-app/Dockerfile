# Specify the base image from the official Node.js repository
FROM node:16-alpine

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy the JavaScript file that contains your server code
COPY app.js .

# Inform Docker that the container is listening on port 3000
EXPOSE 3000

# Command to run your app using Node.js
CMD ["node", "app.js"]