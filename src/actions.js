export const addTodo = (todo) => {
    return { type: "ADD_TODO", payload: todo };
}

export const changeDone = (id) => {
    return { type: "CHANGE_DONE", payload: id };
}