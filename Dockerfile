FROM nginx:stable-perl

COPY ./docs /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
