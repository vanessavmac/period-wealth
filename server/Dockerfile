FROM node:14.14

# Change timezone of container from UTC to EST
RUN apt update && apt install tzdata -y
ENV TZ="America/New_York"

WORKDIR /periodwealth
COPY package*.json ./
RUN npm i
CMD npm run dev