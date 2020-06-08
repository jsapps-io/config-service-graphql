require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql-schema');
const path = require('path');
const app = express();

const {PORT = 4000} = process.env;

app.use(express.static(path.join(__dirname, './public')));

app.use(
  '/graphql',
  graphqlHTTP({
    
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
