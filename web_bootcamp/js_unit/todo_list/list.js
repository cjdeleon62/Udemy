var todos = [];

var input = prompt('What would you like to do?');


while (input !== 'quit') {
	if (input === 'list') {
		listTodos();
	} else if (input === 'new') {
		addTodo();
	} else if (input === 'delete') {
		deleteTodo();
	}
	// ask again for new input
	input = prompt('What would you like to do?');
}

console.log('Okay, you quit the app');

function addTodo() {
	newTodo = prompt('Enter new todo.');
	todos.push(newTodo);
}

function deleteTodo() {
	var index = prompt('Enter an index to delete');
	todos.splice(index, 1);
}

function listTodos() {
	console.log('****************');
	todos.forEach(function(todo, i) {
		console.log(i + ': ' + todo);
	});
	console.log('****************');
}
