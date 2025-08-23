const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Kaspars';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';