const form = document.querySelector('form')
const list = document.querySelector('#list');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const product = form.elements.product;
    const qty = form.elements.qty;
    addItem(product.value, qty.value);   
    product.value = '';
    qty.value = '';
});

const addItem = (product, qty) => {
    const newItem = document.createElement('li');
    newItem.innerText = `${qty} ${product}`;
    list.appendChild(newItem);
}