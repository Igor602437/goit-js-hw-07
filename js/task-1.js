const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);
// const children = Array.from(categories.children);
const children = [...categories.children];

children.forEach(element => {
  const title = element.querySelector('h2');
  const subItems = element.querySelector('ul');
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${subItems.children.length}`);
});
