import './styles.css'
import { calcularPeso, formatTarea } from './utils.js'
import confetti from 'canvas-confetti'

const boton = document.getElementById('añadir')
const input = document.getElementById('input')
const duracionInput = document.getElementById('duracion')
const lista = document.getElementById('lista')

boton.addEventListener('click', guardarplan)

function guardarplan(e) {
  e.preventDefault()
  const minutos = duracionInput.value
  if (!minutos) return
  if (!input.value) return
  const intensidad = calcularPeso(minutos)

  const texto = input.value.trim()
  if (!texto) return

  const li = document.createElement('li')
  li.textContent = `${formatTarea(texto, minutos, new Date())} - Intensidad: ${intensidad}`
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


