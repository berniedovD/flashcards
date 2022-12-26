FROM nginx
ARG APP_SRC=.

RUN rm /etc/nginx/conf.d/default.conf
COPY ${APP_SRC}/nginx.conf /etc/nginx/conf.d
