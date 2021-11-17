const field = document.querySelector(".field");
const addButton = document.querySelector(".add");
const removeButton = document.querySelector(".remove");

addButton.addEventListener("click", addTask);
removeButton.addEventListener("click", removeTasks);

function creteTask(value) {
	const checkboxInput = document.createElement("input");
	const valueText = document.createElement("p");
	const task = document.createElement("div");

	checkboxInput.type = "checkbox";
	checkboxInput.className = "status";
	checkboxInput.addEventListener("change", changeTask);

	valueText.append(value);

	task.className = "task";
	task.append(valueText, checkboxInput);

	return task;
}

function changeTask(event) {
	const { target } = event;
	if (target.checked) {
		target.parentElement.classList.add("success");
	} else {
		target.parentElement.classList.remove("success");
	}
}

function addTask() {
	if (field.value) {
		const id = new Date().getTime();
		localStorage.setItem(id, field.value);
		addToList(field.value);
		field.value = "";
	}
}

function addToList(text) {
	const newTask = creteTask(text);
	const list = document.querySelector(".list");
	list.appendChild(newTask);
}

function runTaskList() {
	const keys = Object.keys(localStorage).sort();
	keys.forEach((key) => {
		const taskText = localStorage.getItem(key);
		addToList(taskText);
	});
}

function removeTasks() {
	localStorage.clear();
	const list = document.querySelector(".list");
	list.innerHTML = "";
}

runTaskList();
