const field = document.querySelector('.field');
const button = document.querySelector('.add');

button.addEventListener('click', addTask);

function creteTask(value) {
	const task = document.createElement("div");
	task.className = 'task';

	const checkboxInput = document.createElement('input');
	checkboxInput.type = 'checkbox';
	checkboxInput.checked;
	checkboxInput.className = 'status';
	checkboxInput.addEventListener('change', completeTask);

	const valueText = document.createElement('p');
	valueText.append(value);
	
	task.append(valueText, checkboxInput);
	return task;
}

function completeTask(event) {
	const target = event.target;
	target.checked ? target.parentElement.classList.add('success') : target.parentElement.classList.remove('success');
}

function addTask() {
	if(field.value) {
		const newTask = creteTask(field.value);
		document.querySelector('.list').appendChild(newTask);
		field.value = '';
	}
}

