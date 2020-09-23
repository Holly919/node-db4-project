const express = require('express');

const db = require('./data/db-config.js');

//const recipesRouter = require('./recipes/recipes-router.js');


const server = express();

server.use(express.json());


server.get('/', (req, res) => {
  res.status(200).json({api: "It's butter ya'll!"})
})

module.exports = server;