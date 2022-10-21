const decrementRef = document.querySelector(`[data-action="decrement"]`)
const incrementRef = document.querySelector(`[data-action="increment"]`)
const count = document.querySelector('#value')

let counterValue = 0

function decrement () {
    counterValue -= 1
    count.textContent = counterValue
}

function increment () {
    counterValue += 1
    count.textContent = counterValue
}

decrementRef.addEventListener('click', decrement)
incrementRef.addEventListener('click', increment)