const INITIAL_STATE = {
  todos: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todoReducer;
