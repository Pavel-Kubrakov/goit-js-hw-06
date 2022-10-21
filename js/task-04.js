const decrementRef = document.querySelector([data-action="decrement"])
const incrementRef = document.querySelector([data-action="increment"])
const count = document.querySelector('#value')

const counterValue = 0

const decrement = () => {
    counterValue -= 1
    count.textContent = counterValue
}

const increment = () => {
    counterValue += 1
    count.textContent = counterValue
}

decrementRef.addEventListener('click', decrement)
incrementRef.addEventListener('click', increment)