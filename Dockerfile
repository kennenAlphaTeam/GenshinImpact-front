FROM nginx:latest

RUN mkdir -p /app/build
WORKDIR /app

ADD ./dist ./build
RUN rm /etc/nginx/conf.d/default.conf
ADD ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
