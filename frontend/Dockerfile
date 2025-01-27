# Step 1: Use a Node.js image as the base
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json file to the working directory
COPY package.json .

# Step 4: Install the application dependencies
RUN npm install

# Step 5: Copy all the application files into the container
COPY . .

# Step 6: Expose the port the app runs on
EXPOSE 3000

# Step 7: Set the command to run the app
CMD ["npm", "start"]
