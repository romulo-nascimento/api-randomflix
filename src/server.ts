import express from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'

import { routes } from './routes'
import './database'

const PORT = 3333

const app = express()
const http = createServer(app)

app.use(express.json())
app.use(routes)

const io = new Server(http, {
    cors: {
        origin: '*'
    }
})

io.on('connection', (socket: Socket) => {
    console.log('Connected', socket.id)
})

const start = () => {
    http.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

export { start, io }