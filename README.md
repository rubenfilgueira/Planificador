# Planificador del Día

Aplicación web sencilla para planificar y registrar las actividades del día. Permite añadir tareas con su duración en minutos, calcula automáticamente un nivel de intensidad según el tiempo invertido y muestra un listado con la fecha de cada tarea. Al añadir una tarea se lanza una animación de confeti como feedback visual.

## Funcionalidad

- **Añadir actividad**: formulario con un campo de texto (actividad) y un campo numérico (duración en minutos).
- **Cálculo de intensidad**: según los minutos introducidos, la tarea se clasifica automáticamente:
  - Menos de 10 minutos → `Baja`
  - Entre 10 y 29 minutos → `Media`
  - 30 minutos o más → `Alta`
- **Listado de tareas**: cada tarea añadida se muestra en una lista con el formato:
  `<actividad> - Duración: <minutos> minutos - <fecha DD/MM/YYYY> - Intensidad: <nivel>`
- **Confeti**: animación de celebración (`canvas-confetti`) al guardar cada tarea.
- **Formato de fechas**: gestionado con `dayjs`.

## Tecnologías

- [Vite](https://vitejs.dev/) — bundler y servidor de desarrollo.
- [Vitest](https://vitest.dev/) — testing.
- [ESLint](https://eslint.org/) — linter.
- [Prettier](https://prettier.io/) — formateador de código.
- [dayjs](https://day.js.org/) — manejo de fechas.
- [canvas-confetti](https://github.com/catdad/canvas-confetti) — animación de confeti.

## Requisitos

- Node.js instalado.
- Dependencias instaladas con:

  ```bash
  npm install
  ```

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo de Vite con recarga en caliente. |
| `npm run build` | Genera la versión de producción de la app en la carpeta `dist`. |
| `npm run preview` | Sirve localmente el contenido ya compilado en `dist` para previsualizar la build de producción. |
| `npm run lint` | Analiza el código con ESLint en busca de errores y problemas de estilo. |
| `npm run format` | Formatea automáticamente todo el código con Prettier. |
| `npm run format:check` | Comprueba si el código cumple el formato de Prettier sin modificarlo. |
| `npm test` | Ejecuta los tests con Vitest. |

## Estructura del proyecto

```
planificador/
├── index.html          # Punto de entrada HTML con el formulario y la lista de tareas
├── src/
│   ├── main.js          # Lógica de la interfaz: añadir tareas, confeti, eventos
│   ├── utils.js          # Funciones auxiliares: formateo de fecha, tarea y cálculo de intensidad
│   └── styles.css        # Estilos de la aplicación
├── utils.test.js        # Tests unitarios de las funciones de utils.js
├── package.json
└── eslint.config.js
```

## Uso

1. Instala las dependencias: `npm install`
2. Arranca el entorno de desarrollo: `npm run dev`
3. Abre la URL que muestra Vite en el navegador (por defecto `http://localhost:5173`).
4. Escribe una actividad, indica su duración en minutos y pulsa **Añadir** para registrarla en la lista.
