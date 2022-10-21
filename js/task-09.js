function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetRef = document.querySelector('.widget')
const spanRef = document.querySelector('.color')
const btnRef = document.querySelector('.change-color')

btnRef.addEventListener('click', changeColor)

function changeColor () {
  document.body.style.backgroundColor = getRandomHexColor()
  spanRef.textContent = getRandomHexColor()
}