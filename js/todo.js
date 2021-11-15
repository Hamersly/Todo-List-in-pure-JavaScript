const field = document.querySelector('.field')
const button = document.querySelector('.add')

button.addEventListener('click', addTask);

function creteTask(value) {
	const checkboxInput = document.createElement('input')
	const valueText = document.createElement('p')
	const task = document.createElement("div")

	checkboxInput.type = 'checkbox';
	checkboxInput.className = 'status';
	checkboxInput.addEventListener('change', changeTask);

	valueText.append(value);

	task.className = 'task';
	task.append(valueText, checkboxInput);
	return task;
}

function changeTask(event) {
	const {target} = event;
	if(target.checked) {
		target.parentElement.classList.add('success')
	}else {
		target.parentElement.classList.remove('success')
	}
}

function addTask() {
	if(field.value) {
		const newTask = creteTask(field.value)
		const list= document.querySelector('.list')
		list.appendChild(newTask);
		field.value = '';
	}
}

