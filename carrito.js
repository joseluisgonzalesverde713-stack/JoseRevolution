const productos = [
  { nombre: "Mayonesa", precio: 10 },
  { nombre: "Fideos", precio: 5 },
  { nombre: "Arroz", precio: 8 },
  { nombre: "Aceite", precio: 12 },
];

console.log("Número de productos: " + productos.length);
console.log("Primer producto: " + productos[0].nombre);
console.log("Último producto: " + productos[productos.length - 1].nombre);

let total = 0;
for (let i = 0; i < productos.length; i++) {
  total += productos[i].precio;
}
console.log("Total: " + total);