// build your server here and require it from index.js
const express = require('express')



const server = express()

server.use(express.json())

server.use('api/project', * )
server.use('api/resource', * )
server.use('api/task', * )

module.exports = server