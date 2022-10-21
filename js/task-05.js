const refs = {
    onInput: document.querySelector(`#name-input`),
    spanText: document.querySelector(`#name-output`)
}

refs.onInput.addEventListener(`input`, input)
refs.onInput.addEventListener(`blur`, blur)

function input (event){
    refs.spanText.textContent = event.currentTarget.value
}

function blur (){
    if(refs.spanText.textContent === ``){
        refs.spanText.textContent = `Anonymous`
    }
}