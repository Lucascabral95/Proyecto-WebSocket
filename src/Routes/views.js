import { Router } from "express"
const viewsRouter = Router()


let data = {
    nombre: "Lucas",
    apellido: "Cabral"
}

let celebridades = [
    { nombre: "Lionel", apellido: "Messi", profesion: "Futbolista"},
    { nombre: "Kylian", apellido: "Mbappe", profesion: "Futbolista"},
    { nombre: "Roger", apellido: "Federer", profesion: "Tenista"},
    { nombre: "Rafael", apellido: "Nadal", profesion: "Tenista"},
    { nombre: "Julian", apellido: "Alvarez", profesion: "Futbolista"}
]

let juegos = [
    { juego: "God of War", consola: "PlayStation 5" },
    { juego: "Uncharted", consola: "PlayStation 5" },
    { juego: "Legend of Zelda", consola: "Nintendo Switch" },
    { juego: "Super Mario Bros", consola: "Nintendo Switch" }
]

viewsRouter.get("/test", (req, res) => {
    res.render("index", {celebridades, data})
})

viewsRouter.get("/test/websocket", (req, res) => {
    res.render("input", {juegos})
})


viewsRouter.get("/", (req, res) => {
    res.render("index", {})
})



export default viewsRouter



