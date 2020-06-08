FROM                       node:lts-alpine

# System Env Vars
#ENV PROXY                 http://proxy-src.research.ge.com:8080
#ENV http_proxy            $PROXY
#ENV https_proxy           $PROXY


# Application Env Vars
#ENV DEBUG                 apphub-microapp-seed:*
ENV PORT                  8080
ENV NODE_ENV              production
ENV REQUEST_LIMIT         2500kb
ENV SESSION_SECRET        mySecret
ENV COOKIE_NAME           myCookie
ENV SWAGGER_API_SPEC      /spec


#ENV ENABLE_CLUSTER_MODE   true
#ENV API_DATABASE_ADAPTER  file

# Redis data store
#ENV ENABLE_REDIS_STORE   true
#ENV REDIS_HOST           0.0.0.0
#ENV REDIS_PORT           6379
#ENV REDIS_PASSWORD       test
#ENV REDIS_DB             0


WORKDIR                   /usr/src/app

COPY                      ./dist      ./

#RUN apt-get update && apt-get install -y redis-server

# Setup npm and install dependencies
RUN npm config set strict-ssl false
RUN yarn config set strict-ssl false
#RUN npm config set proxy $PROXY
#RUN npm config set https-proxy $PROXY
RUN npm config ls

RUN npm -v && \
    npm -v \
    yarn -v

RUN yarn install --production

EXPOSE 8080

CMD [ "yarn", "server" ]
