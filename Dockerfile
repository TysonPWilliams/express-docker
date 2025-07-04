FROM node:alpine

# COPY . .
COPY package.json package-lock.json package*.json LICENSE README.md ./
COPY src ./src/

# RUN is for when the Docker image is being built
RUN npm install

# CMD is for when the Docker image is running in a container 
CMD ["npm", "run", "start"]

EXPOSE 3000

HEALTHCHECK --interval=10s --retries=5 \ 
    CMD wget http://localhost:3000/health || exit 1