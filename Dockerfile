# Use a node base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the app's source code
COPY . .

# Build the app
RUN npm run start

# Serve the app with Nginx
# FROM nginx:1.21.3-alpine
# COPY --from=0 /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]