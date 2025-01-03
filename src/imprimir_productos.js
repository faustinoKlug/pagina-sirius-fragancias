import { perfumes_hombre, perfumes_mujer } from './lista_productos.js';

const d = document;

document.addEventListener("DOMContentLoaded", () => {
    const $productsContainerM = document.getElementById("productsContainerHombres"),
        $productsContainerF = document.getElementById("productsContainerMujeres");
    
    perfumes_hombre.forEach(perfume => {
        const $div = document.createElement("div");
        $div.classList.add("max-w-[270px]", "max-h-[320px]", "w-full", "my-8", "flex", "flex-col", "justify-between", "h-full");
        $div.innerHTML = `
            <div class="w-full h-full flex flex-col items-center">
                <img src="${perfume.imagen}" alt="" class="w-[200px] h-[80%] object-cover cursor-pointer scale-hover">
                <p class="text-center font-bold uppercase mt-2 text-lg cursor-pointer">${perfume.nombre}</p>
                <p class="text-center">$${perfume.precio}</p>
            </div>
            <div class="mt-2">
                <button class="w-full border-[1px] btn-carrito p-1 btn-agregar" data-id="${perfume.id}">AÑADIR</button>
            </div>
        `;
        $productsContainerM.appendChild($div);
    });

    perfumes_mujer.forEach(perfume => {
        const $div = document.createElement("div");
        $div.classList.add("max-w-[270px]", "max-h-[320px]", "w-full", "my-8", "flex", "flex-col", "justify-between", "h-full");
        $div.innerHTML = `
            <div class="w-full h-full flex flex-col items-center">
                <img src="${perfume.imagen}" alt="" class="w-[200px] h-[80%] object-cover cursor-pointer scale-hover">
                <p class="text-center font-bold uppercase mt-2 text-lg cursor-pointer">${perfume.nombre}</p>
                <p class="text-center">$${perfume.precio}</p>
            </div>
            <div class="mt-2">
                <button class="w-full border-[1px] btn-carrito p-1 btn-agregar" data-id="${perfume.id}">AÑADIR</button>
            </div>
        `;
        $productsContainerF.appendChild($div);
    });
});
