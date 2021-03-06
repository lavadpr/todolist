export const addTodo = (todo) => {
    return { type: "ADD_TODO", payload: todo };
}

export const changeDone = (id) => {
    return { type: "CHANGE_DONE", payload: id };
}
export const deleteItem = (id) => {
    return { type: "DELETE_ITEM", payload: id };
}
export const initTodos = (todos) => {
    return { type: "INIT_TODOS", payload: todos };
}