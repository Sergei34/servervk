//создание HTTP-сервер 
const server = require(`http`).createServer()
//подключение к серверу socket.io
const io = require(`socket.io`)(server, {
    cors: {
        origin: `*`
    }
})


const log = console.log

//получаем обработчик событий 

//данная функция выполняется при подключение каждого сокета 
//
const onConnection = (socket) => {

}

//обрабатывем подключение 
io.on(`connection`, onConnection)

//запускаем сервер 
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    log(`server ready connect. Port: ${PORT}`)
})