//socket.io
//socket.io-client

const io = require('socket.io').listen(3100)

io.on('connection', socket=>{
    console.log('server socket is connected with client socket')
})