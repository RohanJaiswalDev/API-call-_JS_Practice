var todosList = document.getElementById("todos");

async function getAllTodosFromServer() {
    try {
        var response = await axios.get("https://jsonplaceholder.typicode.com/todos?userId=10");
        var todos = response.data;
        for (let i = 0; i < todos.length; i++) {
            console.log(todos[i])
            var mytodo = document.createElement('p');
            mytodo.innerHTML = `<strong>${todos[i].title}</strong>`;
            todosList.append(mytodo);
        }
    }
    catch (err) {
    }
}
getAllTodosFromServer()