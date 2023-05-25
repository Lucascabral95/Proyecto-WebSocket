// const socket = io()

// socket.on("update", actualizacion => {
//     const act = actualizacion.join("<br>")

//     const texto = document.getElementById("chatParagraph")
//     texto.innerHTML = act
// })

// const input = document.getElementById("escribir")
// const enviar = document.getElementById("enviar")

// enviar.addEventListener("click", enviarMensaje)
// input.addEventListener("keydown", event => {
//     if (event.key === "Enter") {
//         enviarMensaje()
//     }
// })

// function enviarMensaje() {
//     const message = input.value
//     if (message) {
//         socket.emit("mensaje", `Cliente: ${message}`)
//         input.value = "";
//     }
// }


// const enviar2 = document.getElementById("enviar2")
// const input2 = document.getElementById("escribir2")

// enviar2.addEventListener("click", enviarMensaje2())
// input2.addEventListener("keydown", event => {
//     if(event.key === "Enter"){
//         enviarMensaje2()
//     }
// })

// function enviarMensaje2() {
//     const message2 = input2.value
//     if(message2){
//         socket.emit("mensaje", `Servidor: ${message2}`)
//         input2.value = ""
//     }
// }
const socket = io()

// let nombre = prompt("¡Hola! ¿Como te llamas?")

const input = document.getElementById("escribir")
const enviar = document.getElementById("enviar")
const p = document.getElementById("chatParagraph")


function mandarMensaje() {
    const inputResponse = `Cliente: ${input.value}`
    socket.emit("mensaje", inputResponse)

    input.value = ""
}

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        mandarMensaje()
    } else {
        console.log("Error al enviar mensaje")
    }
})

enviar.addEventListener("click", event => {
    mandarMensaje()
})

socket.on("update", data => {
    p.innerHTML = data.join("<br>")

    p.scrollIntoView(false)
})


