function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const addBoxesRef = document.querySelector('#boxes')
const numberBoxes = document.querySelector('#controls input')
const btnCreateRef = document.querySelector('[data-create]')
const btnDestroyRef = document.querySelector('[data-destroy]')
const amount = 0

btnCreateRef.addEventListener('click', getNumberOfBoxes)

function getNumberOfBoxes(){
  createBoxes (numberBoxes.value)
}

function createBoxes(amount){
  if(amount > 100){
   return alert('НЕ БІЛЬШЕ 100')
  }
  let width = 20
  let height = 20
  for (let i = 0; i < amount; i += 1) {
    width += 10
    height += 10
    const div = document.createElement('div')
    div.style.backgroundColor = getRandomHexColor()
    div.style.width = `${width}px`
    div.style.height = `${height}px`
    div.style.marginTop = `2px`
    div.style.marginLeft = 'auto'
    div.style.marginRight = 'auto'
    addBoxesRef.append(div)
  }
}

btnDestroyRef.addEventListener('click', destroy)

function destroy() {
  addBoxesRef.innerHTML = ''
}