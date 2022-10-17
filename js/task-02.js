const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulItelEl = document.querySelector('#ingredients')
const addLiEl = ingredients.map((ingredient) =>{
  const liEl = document.createElement('li')
  liEl.classList.add('item')
  liEl.innerHTML = ingredient
  return liEl

})
ulItelEl.append(...addLiEl)