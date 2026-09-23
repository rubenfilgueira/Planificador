import days from 'dayjs'
export function formatDate(date) {
    const formattedDate = days(date).format('DD/MM/YYYY')
    return formattedDate
}

export function formatTarea(tarea, duracionMinutos, fecha) {
    const fechaFormateada = formatDate(fecha)
    const duracion = Number(duracionMinutos)
    const duracionTexto = duracion > 0 ? ` - Duración: ${duracion} minutos` : ''
    return `${tarea}${duracionTexto} - ${fechaFormateada}`
} 

export function calcularPeso(valor) {
    let peso
  if (valor < 10) peso = 'Baja'
  else if (valor < 30) peso = 'Media'
  else peso = 'Alta'
  return peso
}