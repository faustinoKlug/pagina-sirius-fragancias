import { perfumes } from "./lista_productos.js";

const d = document,
  $carritoContainer = d.getElementById("carrito"),
  $carritoBtn = d.querySelectorAll(".carrito-btn"),
  $carritoBtnClose = d.getElementById("carrito-btn-close"),
  $productosContainer = d.getElementById("cart-products");

let carrito = []; 

const updateCarritoCounter = (contador) => {
  const $counterCarritoDesktop = d.querySelector(".counter-carrito-D"),
    $counterCarritoMobile = d.querySelector(".counter-carrito-M");

  $counterCarritoDesktop.innerHTML = contador;
  $counterCarritoMobile.innerHTML = contador;

  if (contador > 0) {
    $counterCarritoMobile.classList.remove("hidden");
    $counterCarritoDesktop.classList.remove("hidden");
  } else {
    $counterCarritoMobile.classList.add("hidden");
    $counterCarritoDesktop.classList.add("hidden");
  }
};

// BOTÓN ABRIR CARRITO
$carritoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    $carritoContainer.classList.toggle("show");
    document.documentElement.classList.toggle("overflow-hidden");
  });
});

// BOTÓN CERRAR CARRITO
$carritoBtnClose.addEventListener("click", () => {
  $carritoContainer.classList.toggle("show");
  document.documentElement.classList.toggle("overflow-hidden");
});

// CARRITO
document.addEventListener("DOMContentLoaded", () => {
  const $btnAgregar = d.querySelectorAll(".btn-agregar");

  let contador = 0;

  $btnAgregar.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      const selectedProduct = perfumes.find(
        (perfume) => perfume.id === parseInt(productId)
      );

      if (selectedProduct) {
        const existingProduct = carrito.find(
          (product) => product.id === selectedProduct.id
        );

        const maxCantidad = (() => {
          if ([10, 13, 4].includes(selectedProduct.id)) return 2;
          if (selectedProduct.id === 5) return 3;
          return 1;
        })();

        if (existingProduct) {
          if (existingProduct.cantidad < maxCantidad) {
            existingProduct.cantidad += 1;
            const $cantidadSpan = $productosContainer.querySelector(
              `span[data-id="${existingProduct.id}"]`
            );
            $cantidadSpan.textContent = existingProduct.cantidad;
          }
        } else {
          selectedProduct.cantidad = 1;
          carrito.push(selectedProduct);

          contador += 1;
          updateCarritoCounter(contador);

          const $div = d.createElement("div");
          $div.classList.add("py-[10px]", "flex", "w-full", "justify-between");
          $div.setAttribute("data-id", selectedProduct.id);
          $div.innerHTML = `
            <p class="cursor-pointer text-3xl flex items-center mb-1 mr-2 delete-product">&Cross;</p>
            <p class="flex items-center">${selectedProduct.nombre}</p>
            <div class="flex items-center">
              <button class="restar-producto-btn" data-id="${selectedProduct.id}">-</button>
              <span class="px-3" data-id="${selectedProduct.id}">${selectedProduct.cantidad}</span>
              <button class="sumar-producto-btn" data-id="${selectedProduct.id}">+</button>
            </div>
          `;

          const $restarBtn = $div.querySelector(".restar-producto-btn");
          const $sumarBtn = $div.querySelector(".sumar-producto-btn");
          const $cantidadSpan = $div.querySelector("span");
          const $deleteBtn = $div.querySelector(".delete-product");

          $restarBtn.addEventListener("click", () => {
            if (selectedProduct.cantidad > 1) {
              selectedProduct.cantidad -= 1;
              $cantidadSpan.textContent = selectedProduct.cantidad;
            }
          });

          $sumarBtn.addEventListener("click", () => {
            if (selectedProduct.cantidad < maxCantidad) {
              selectedProduct.cantidad += 1;
              $cantidadSpan.textContent = selectedProduct.cantidad;
            }
          });

          $deleteBtn.addEventListener("click", () => {
            carrito = carrito.filter((product) => product.id !== selectedProduct.id);

            contador -= 1;
            updateCarritoCounter(contador);

            $div.remove();
          });

          $productosContainer.appendChild($div);
        }
      }
    });
  });

  // BOTÓN DE ENVIAR PEDIDO A WHATSAPP
  const $enviarBtn = d.querySelector(".enviar-pedido");

  $enviarBtn.addEventListener("click", () => {
    if (carrito.length === 0) return;

    let mensaje = "¡Hola! Quiero realizar un pedido:\nProductos en el carrito:\n";

    carrito.forEach((producto) => {
      mensaje += `${producto.cantidad} x ${producto.nombre_envio} - Precio: ${producto.precio.toLocaleString("es-AR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}\n`;
    });

    mensaje += "\nGracias.";

    const numeroTelefono = "3442654858"; 
    const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsapp, "_blank");
  });
});

