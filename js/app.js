import { carritoIndex } from "./carritoIndex.js";
import { getData } from "./getData.js";

export const mostrarProductos = async () => {

  const contenedorProductos = document.getElementById("producto-contenedor");
  const productos = await getData();

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
      swal({
        title: 'A wild AGREGAR AL CARRITO appears!         ITS SUPER EFFECTIVE!',
        text: ' Estas cada vez mas cerca de jugar. Segui comprando o finaliza tu compra entrando al carrito.',
        icon:'success',
        confirm:'Seguir comprando',
        timer:5000
      })
    });
  });
};

