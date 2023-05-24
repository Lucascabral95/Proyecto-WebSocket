import express from "express"
import handlebars from "express-handlebars"
import viewsRouter from "./Routes/views.js"
import { Server } from 'socket.io' // NECESARIO SOCKET

const app = express()
const httpServer = app.listen(8080, () => console.log("Listening on port 8080"))  // NECESARIO SOCKET
const io = new Server(httpServer)   // NECESARIO SOCKET
app.use(express.static('public')); // NECESARIO SOCKET


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(viewsRouter)

app.engine("handlebars", handlebars.engine())
app.set("views", "./views")
app.set("view engine", "handlebars")



let chatCliente = []

io.on("connection", socket => {
    console.log("Nuevo cliente conectado.")

    socket.on("mensaje", data => {
        console.log(data)
        chatCliente.push(data)
        io.emit("update", chatCliente)
    })   
 
})