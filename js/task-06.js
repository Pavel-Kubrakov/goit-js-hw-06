const inputRef = document.getElementById(`validation-input`)

inputRef.addEventListener(`blur`, validation)
inputRef.addEventListener(`focus`, clear)

const maxLength = inputRef.getAttribute('data-length')

function validation (event) {
    if (event.currentTarget.value.length > maxLength || event.currentTarget.value.length === 0){
    inputRef.classList.add('invalid')
    }
    inputRef.classList.add('valid')
}

function clear (){
    inputRef.classList.remove('invalid')
    inputRef.classList.remove('valid')
}