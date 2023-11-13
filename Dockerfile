FROM node:16.3.0-alpine
WORKDIR /home/react-app
RUN npm i express@4.17.1 &&  \
    npm i react-dom@17.0.1 &&  \
    npm i react-hot-loader@4.13.0 && \
    npm i classnames@2.3.2 && \
    npm i react-redux@7.2.9 && \
    npm i axios@0.21.4 && \
    npm i react-router-dom@6.17.0 && \
    npm i redux-devtools-extension@2.13.9 && \
    npm i redux-thunk@2.4.2 && \
    npm i formik@2.4.5 && \
    npm i easy-peasy@5.0.1 && \
    npm i compression@1.7.4 && \
    npm i helmet@7.0.0
COPY . /home/react-app
EXPOSE 3000
CMD node dist/server/server.js
