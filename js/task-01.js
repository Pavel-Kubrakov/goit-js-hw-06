const item = document.querySelectorAll('.item')
const countItem = item.length
console.log('Number of categories:', countItem)

const categoriesArray = [...item]
    .map(
        categories => `Category: ${categories.children[0].textContent}
        Elements: ${categories.children[1].children.length}`
        )
    .join("\n");
console.log(categoriesArray);