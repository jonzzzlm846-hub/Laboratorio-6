// 1. Datos de entrada (Arreglo de objetos)
const listaDeCompras = [
  { nombre: "Manzanas", precio: 2.5, cantidad: 4 },
  { nombre: "Leche", precio: 1.2, cantidad: 2 },
  { nombre: "Café", precio: 8.5, cantidad: 1 },
  { nombre: "Pan", precio: 0.8, cantidad: 5 }
];

// 2. Función para procesar la lista
function procesarCompras(productos) {
  let totalGeneral = 0;
  let productoMasCaro = productos[0];

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    
    // Sumar al total general
    totalGeneral += producto.precio * producto.cantidad;

    // Verificar si es el producto con mayor precio unitario
    if (producto.precio > productoMasCaro.precio) {
      productoMasCaro = producto;
    }
  }

  // 3. Mostrar resultados en consola
  console.log("--- RESUMEN DE COMPRA ---");
  console.log(`Total a pagar: $${totalGeneral.toFixed(2)}`);
  console.log(`Producto más caro: ${productoMasCaro.nombre} ($${productoMasCaro.precio})`);
}

// 4. Ejecución de la función
procesarCompras(listaDeCompras);