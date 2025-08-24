const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();
  
	if (nameInput.value === '' || emailInput.value === '') {
		msg.classList.add('error');
		msg.innerHTML = 'Please enter all fields';

		// Totally not the best way to do this, but this is just for practice
		setTimeout(() => {
			msg.classList.remove('error');
			msg.innerHTML = '';
		}, 3000);

  	} else {
		const li = document.createElement('li');

		li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
		li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
		userList.appendChild(li);

		// Clear fields
		nameInput.value = '';
		emailInput.value = '';
	}
}