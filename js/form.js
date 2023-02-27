const inputNombre = document.getElementById('input-nombre')
const inputEmail = document.getElementById('input-email')
const textArea = document.getElementById('textarea')

// Para agregar un texto de error
const errorNombre = document.getElementById('error1')
const errorEmail = document.getElementById('error2')
const errorTextarea = document.getElementById('error3')


const submit = document.getElementById('submit')
const reset = document.getElementById('reset')



// Todo lo relacionado con el texto y estilos al no llenar los campos
function errorForm(a, b, c) {
    a.style.borderColor = '#bb200d'

    b.innerText = 'Rellena este campo'
    b.style.color = '#bb200d'
    b.style.fontSize = '16px'

    c.preventDefault()
}

// Para quitar el color del error
function colorOriginal(a, b, c) {
    a.style.borderColor = '#ffffff'
    b.style.borderColor = '#ffffff'
    c.style.borderColor = '#ffffff'
}

// Para quitar el texto
function borrarError(a, b, c) {
    a.innerText = ''
    b.innerText = ''
    c.innerText = ''
}

// Para quitar el texto y color despues de responder en los campos
function elElse(input, error) {
    input.style.borderColor = '#ffffff'
    error.innerText = ''
}



// Texto de aviso para llenar los campos en el caso que no lo estén
submit.addEventListener('click', (e) => {
    if (inputNombre.value === null || inputNombre.value === '') {
        errorForm(inputNombre, errorNombre, e)
    } else {
        elElse(inputNombre, errorNombre)
    }

    if (inputEmail.value === null || inputEmail.value === '') {
        errorForm(inputEmail, errorEmail, e)
    } else {
        elElse(inputEmail, errorEmail)
    }

    if (textArea.value === null || textArea.value === '') {
        errorForm(textArea, errorTextarea, e)
    } else {
        elElse(textArea, errorTextarea)
    }
})


// Quita el color y texto de error luego de reestablecer el form
reset.addEventListener('click', () => {
    colorOriginal(inputNombre, inputEmail, textArea)
    borrarError(errorNombre, errorEmail, errorTextarea)
})

