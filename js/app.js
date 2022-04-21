import { carritoIndex } from "./carritoIndex.js";
import { productos } from "./stock.js";


const mostrarProductos = (productos) => {

  const contenedorProductos = document.getElementById("producto-contenedor");
  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                        
                        <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">Agregar al carrito</i></a>
                      </div>
                      <span class="card-title">${producto.nombre}</span>
                      <div class="card-content">
                          <p>${producto.desc}</p>
                          <p>Consola: ${producto.consola}</p>
                          <p>${producto.precio}</p>
                      </div>
                      `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      carritoIndex(producto.id);
    });
  });
};

mostrarProductos(productos);