import dayjs from "dayjs"


const boton = document.getElementById("añadir")
const input = document.getElementById("input")
const lista = document.getElementById("lista")

boton.addEventListener("click", guardarplan)

function guardarplan() {

        const fechaHoy = dayjs().format("DD/MM/YYYY")
        //document.getElementById("lista").innerHTML += `<li>${input.value}</li>`
        const li = document.createElement("li")
        li.textContent = input.value + " - " + fechaHoy
        lista.appendChild(li)
        input.value = ""
    alert("Plan guardado correctamente")
}