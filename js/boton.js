const botonArriba = document.getElementById('boton-arriba')

// Muestra y esconde el botón según su posición
window.onscroll = () => {
    if (document.documentElement.scrollTop < 785) {
        botonArriba.style.transform = 'scale(0)'
    } else {
        botonArriba.style.transform = 'scale(1)'
    }
}

// Lleva al principio de la página
botonArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    botonArriba.style.transform = 'scale(0)'
})



