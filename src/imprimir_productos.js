import { perfumes_hombre, perfumes_mujer } from './lista_productos.js';

const d = document;

document.addEventListener("DOMContentLoaded", () => {
    const $productsContainerM = document.getElementById("productsContainerHombres"),
        $productsContainerF = document.getElementById("productsContainerMujeres");
    
    perfumes_hombre.forEach(perfume => {
        const $div = document.createElement("div");
        $div.classList.add("max-w-[270px]", "max-h-[320px]", "w-full", "my-8", "flex", "flex-col", "justify-between", "h-full", "relative");
        if (perfume.stock === false) {
            $div.innerHTML = `
                <p class="absolute top-[10px] right-0 text-sm py-2 px-3 border-[1px] font-semibold border-white ">SIN STOCK</p>
                <div class="w-full h-full flex flex-col items-center">
                    <img src="${perfume.imagen}" alt="" class="w-[200px] h-[80%] object-cover cursor-pointer scale-hover">
                    <p class="text-center font-bold uppercase mt-2 text-lg cursor-pointer">${perfume.nombre}</p>
                    <p class="text-center">$${perfume.precio}</p>
                </div>
                <div class="mt-2">
                    <button class="w-full border-[1px] cursor-default p-1 flex justify-center items-center gap-x-1" data-id="${perfume.id}">
                    AÑADIR
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q1.35 0 2.6-.437t2.3-1.263L5.7 7.1q-.825 1.05-1.263 2.3T4 12q0 3.35 2.325 5.675T12 20m6.3-3.1q.825-1.05 1.263-2.3T20 12q0-3.35-2.325-5.675T12 4q-1.35 0-2.6.437T7.1 5.7z"/></svg>
                    </button>
                </div>
            `;
        } else {
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
        }
        $productsContainerM.appendChild($div);
    });

    perfumes_mujer.forEach(perfume => {
        const $div = document.createElement("div");
        $div.classList.add("max-w-[270px]", "max-h-[320px]", "w-full", "my-8", "flex", "flex-col", "justify-between", "h-full", "relative");
        if (perfume.stock === false) {
            $div.innerHTML = `
                <p class="absolute top-[10px] right-0 text-sm py-2 px-3 border-[1px] font-semibold border-white ">SIN STOCK</p>
                <div class="w-full h-full flex flex-col items-center">
                    <img src="${perfume.imagen}" alt="" class="w-[200px] h-[80%] object-cover cursor-pointer scale-hover">
                    <p class="text-center font-bold uppercase mt-2 text-lg cursor-pointer">${perfume.nombre}</p>
                    <p class="text-center">$${perfume.precio}</p>
                </div>
                <div class="mt-2">
                    <button class="w-full border-[1px] cursor-default p-1 flex justify-center items-center gap-x-1" data-id="${perfume.id}">
                    AÑADIR
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q1.35 0 2.6-.437t2.3-1.263L5.7 7.1q-.825 1.05-1.263 2.3T4 12q0 3.35 2.325 5.675T12 20m6.3-3.1q.825-1.05 1.263-2.3T20 12q0-3.35-2.325-5.675T12 4q-1.35 0-2.6.437T7.1 5.7z"/></svg>
                    </button>
                </div>
            `;
        } else {
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
        }

        $productsContainerF.appendChild($div);
    });
});
