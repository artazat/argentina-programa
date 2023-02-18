const botonArriba = document.getElementById(`boton-arriba`)

window.onscroll = () => {
    if (document.documentElement.scrollTop < 785){
        botonArriba.style.transform = "scale(0)"
    }else{
        botonArriba.style.transform = "scale(1)"
    }
}

botonArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})



