const refs = {
    sizeControl: document.querySelector(`#font-size-control`),
    sizeText: document.querySelector(`#text`)
}

refs.sizeControl.addEventListener('input', number)

function number(){
    refs.sizeText.style.fontSize = refs.sizeControl.value + 'px'
}