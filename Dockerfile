FROM nginx:1.23.2-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY   /dist/galettes-de-luc-front-end/browser /usr/share/nginx/html
