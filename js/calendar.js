const buttonBuyActive = document.getElementById("button-buy-active");
const buttonBuyDisabled = document.getElementById("button-buy-disabled");

const totalTicket = document.querySelector(".total-ticket");

const cantAdulto = document.querySelector(".cant-adulto");
const cantNino = document.querySelector(".cant-nino");
const cantJubilado = document.querySelector(".cant-jubilado");

let cantA = 0;
let cantN = 0;
let cantJ = 0;

const precioA = 4000;
const precioN = 2000;
const precioJ = 8000;

let currentDate = new Date();
let selectedDate = currentDate;

const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

function updateTotal() {
    let total = (cantA * precioA) + (cantN * precioN) + (cantJ * precioJ);
    totalTicket.innerText = `$ ${total}`;
    if (total > 0) {
        buttonBuyActive.hidden = false;
        buttonBuyDisabled.hidden = true;
    } else {
        buttonBuyActive.hidden = true;
        buttonBuyDisabled.hidden = false;
    }
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

function updateCalendar() {
    const monthYear = document.getElementById('monthYear');
    const calendarDays = document.getElementById('calendarDays');

    // Actualizar el título del mes
    monthYear.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    calendarDays.innerHTML = '';

    // Generar 42 días (6 semanas x 7 días)
    for (let i = 0; i < 42; i++) {
        const day = new Date(startDate);
        day.setDate(startDate.getDate() + i);

        const dayElement = document.createElement('div');
        dayElement.className = 'h-10 flex items-center justify-center text-sm cursor-pointer transition-colors rounded-lg';
        dayElement.textContent = day.getDate();

        // Estilos según el tipo de día
        if (day.getMonth() !== currentDate.getMonth()) {
            dayElement.className += ' text-gray-300';
        } else {
            dayElement.className += ' text-gray-700 hover:bg-gray-100 calendar-day';
            dayElement.setAttribute('data-day', day.getDate());
            dayElement.setAttribute('data-month', day.getMonth());
            dayElement.setAttribute('data-year', day.getFullYear());

            if (selectedDate &&
                day.getDate() === selectedDate.getDate() &&
                day.getMonth() === selectedDate.getMonth() &&
                day.getFullYear() === selectedDate.getFullYear()) {
                dayElement.className = dayElement.className.replace('text-gray-700 hover:bg-gray-100', 'bg-blue-500 text-white font-medium');
                dayElement.classList.add('selected');
            }

            dayElement.addEventListener('click', function () {
                selectDate(day);
            });
        }

        calendarDays.appendChild(dayElement);
    }
}

function selectDate(date) {
    selectedDate = date;
    updateCalendar();
}

// Navegación entre meses
document.getElementById('prevMonth').addEventListener('click', function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

document.getElementById('nextMonth').addEventListener('click', function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

// Inicializar el calendario cuando se carga la página
document.addEventListener('DOMContentLoaded', function () {
    updateCalendar();
});

