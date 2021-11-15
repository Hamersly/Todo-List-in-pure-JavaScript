const [field, button] = [
	document.querySelector('.field'),
	document.querySelector('.add'),
]

button.addEventListener('click', addTask);

function creteTask(value) {
	const [checkboxInput, valueText, task] = [
		document.createElement('input'),
		document.createElement('p'),
		document.createElement("div"),
	]

	checkboxInput.type = 'checkbox';
	checkboxInput.className = 'status';
	checkboxInput.addEventListener('change', changeTask);

	valueText.append(value);

	task.className = 'task';
	task.append(valueText, checkboxInput);
	return task;
}

function changeTask(event) {
	const target = event.target;
	if(target.checked) {
		target.parentElement.classList.add('success')
	}else {
		target.parentElement.classList.remove('success')
	}
}

function addTask() {
	if(field.value) {
		const [newTask, list] = [
			creteTask(field.value),
			document.querySelector('.list'),
		]

		list.appendChild(newTask);
		field.value = '';
	}
}

