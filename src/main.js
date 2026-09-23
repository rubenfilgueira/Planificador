import dayjs from 'dayjs'
import './styles.css'
import.meta.env.VITE_VERSION
import { calcularPeso, formatDate } from './utils.js'
import confetti from 'canvas-confetti'
import { formatTarea } from './utils.js'

const boton = document.getElementById('añadir')
const input = document.getElementById('input')
const duracionInput = document.getElementById('duracion')
const lista = document.getElementById('lista')

boton.addEventListener('click', guardarplan)

function guardarplan(e) {
  e.preventDefault()
  const minutos = duracionInput.value
  if (!minutos ) return
  if (!input.value) return
  let peso = calcularPeso(minutos)


  const fechaHoy = formatDate(new Date())
  const texto = input.value.trim()
  if (!texto) return 
 
  const li = document.createElement('li')
  li.textContent = formatTarea(texto, duracionInput.value, new Date())
  lista.appendChild(li)
  
  input.value = ''
  duracionInput.value = ''
  //alert("Plan guardado correctamente")

  confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 },
})
}


