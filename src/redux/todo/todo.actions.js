export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo,
});

export const setTodo = (todos) => ({
  type: 'SET_TODOS',
  payload: todos,
});
