const express = require('express')
const app = express()

const http = require('http').createServer(app)
const io = require('socket.io')(http, {
    cors: { origin: "*" }
})

io.on('connection', socket => {
    socket.on('message', message => {
        io.emit('message', message)
    })
})

http.listen(3000, () => { console.log('Listening on port 3000') })