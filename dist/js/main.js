// Formulario de contacto
const form = document.getElementById('contacto-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.');
});


// spinner

window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});



// carrousel / promociones:

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 3000); // Cambiar cada 3 segundos



// formulario utilizando localstorage:

document.getElementById('form-reserva').addEventListener('submit', (e) => {
    e.preventDefault();

    const reserva = {
        nombre: document.getElementById('nombre').value,
        telefono: document.getElementById('telefono').value,
        servicio: document.getElementById('servicio').value,
        fecha: document.getElementById('fecha').value,
        hora: document.getElementById('hora').value,
        notas: document.getElementById('notas').value
    };

    localStorage.setItem('reserva', JSON.stringify(reserva));
    alert('Reserva realizada con éxito');
});



// testimonios:

let currentTestimonio = 0;
const testimonios = document.querySelectorAll('.testimonio');
const totalTestimonios = testimonios.length;

document.getElementById('next-testimonio').addEventListener('click', () => {
    currentTestimonio = (currentTestimonio + 1) % totalTestimonios;
    updateTestimonios();
});

document.getElementById('prev-testimonio').addEventListener('click', () => {
    currentTestimonio = (currentTestimonio - 1 + totalTestimonios) % totalTestimonios;
    updateTestimonios();
});

function updateTestimonios() {
    testimonios.forEach((testimonio, index) => {
        testimonio.classList.remove('activo');
        if (index === currentTestimonio) {
            testimonio.classList.add('activo');
        }
    });
}

// darkmode:

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    toggleButton.textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
});
