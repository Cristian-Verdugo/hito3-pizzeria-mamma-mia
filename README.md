# Pizzería Mamma Mía - Hito 3

Este proyecto es una aplicación de React creada con Vite.js para la gestión de una pizzería.

## Hito 3 - Renderización dinámica y Carrito

- Se agregó el archivo `pizzas.js` en `src/utils` con la información de las pizzas y el carrito simulado (`pizzaCart`).
- El componente `Home` recorre el array de pizzas y renderiza dinámicamente un `<CardPizza />` por cada pizza.
- El componente `CardPizza` muestra la información de cada pizza usando props e itera los ingredientes con `<li>`.
- Se creó el componente `Cart` que recorre el array `pizzaCart`, muestra la información de cada pizza en el carrito, permite aumentar/disminuir la cantidad y elimina la pizza si la cantidad es 0.
- El total de la compra se calcula y muestra dinámicamente en el carrito.
- El botón de "Pagar" está presente para futuras funcionalidades.
- Se mejoró la organización del proyecto moviendo `pizzas.js` a la carpeta `src/utils`.

- `src/components`: Contiene todos los componentes reutilizables.
- `src/utils/pizzas.js`: Contiene la información de las pizzas y el carrito simulado.
