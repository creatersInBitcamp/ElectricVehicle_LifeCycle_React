const io = require('socket.io')()

io.onconnection(socket => {
    console.log(`connect: ${socket.id}`)

    socket.on('hello', () => {
        console.log(`hello from ${socket.id}`)
    })
    socket.on(`disconnect`, () => {
        console.log(`disconnect: ${socket.id}`)
    })

    io.listen(3000)

    setInterval(() => {
        io.emit('message', new Date().toISOString())
    }, 1000)
})