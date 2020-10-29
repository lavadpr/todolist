import api from './api'

const getTodos = () => {
    return api.get('/todos');
}

const addTodo = (text) => {
    return api.post("/todos", {text, done: false});
}

const deleteTodo = (id) => {
    return api.delete("/todos/" + id);
}

const updateTodo = (id, done) => {
    return api.put("/todos/" + id, {done: !done});
}

export {
    updateTodo, deleteTodo, addTodo, getTodos
}