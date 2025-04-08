FROM nginx:latest

COPY ./dist/apps/vet-client/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/nginx.conf
