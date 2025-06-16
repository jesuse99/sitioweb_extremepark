const totalTicket = document.querySelector(".total-ticket");
const buttonMinus = document.getElementById("button-minus");
const buttonPlus = document.getElementById("button-plus");
const cantAdulto = document.querySelector(".cant-adulto");
const cantNino = document.querySelector(".cant-nino");
const cantJubilado = document.querySelector(".cant-jubilado");

const listMenu = document.querySelector(".list-menu");
const buttonMenu = document.getElementById("button-menu");
buttonMenu.addEventListener('click', function() {
    if (listMenu.classList.contains("hidden")) {
        listMenu.classList.remove("hidden");
    } else {
        listMenu.classList.add("hidden");
    }
});

const diaFecha = document.querySelectorAll(".cursor-pointer");
const hoyFecha = new Date().getDate();

diaFecha.forEach(element => {
    if (element.innerText == hoyFecha) {
        element.classList.add("bg-blue-500", "text-white", "font-bold");
    }

    element.addEventListener('click', function () {
        diaFecha.forEach(element => {
            element.classList.remove("bg-blue-500", "text-white", "font-bold")
        });
        element.classList.add("bg-blue-500", "text-white", "font-bold");
    });
});

let cantA = 0;
let cantN = 0;
let cantJ = 0;

let precioA = 4000;
let precioN = 2000;
let precioJ = 8000;

function updateTotal() {
    let total = (cantA * precioA) + (cantN * precioN) + (cantJ * precioJ)
    totalTicket.innerText = `$ ${total}`;
}

function incA() {
    cantA++;
    cantAdulto.innerText = cantA;
    updateTotal();
}

function decA() {
    if (cantA > 0) {
        cantA--;
        cantAdulto.innerText = cantA;
        updateTotal();
    }
}

function incN() {
    cantN++;
    cantNino.innerText = cantN;
    updateTotal();
}

function decN() {
    if (cantN > 0) {
        cantN--;
        cantNino.innerText = cantN;
        updateTotal();
    }
}

function incJ() {
    cantJ++;
    cantJubilado.innerText = cantJ;
    updateTotal();
}

function decJ() {
    if (cantJ > 0) {
        cantJ--;
        cantJubilado.innerText = cantJ;
        updateTotal();
    }
}


