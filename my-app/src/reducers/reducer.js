import TodoList from "../components/TodoList";

export const todo = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const reducer = (state, action) => {
  console.log("state", state, "action", action);
  switch (action.type) {
    case "ADD_TODO":
      console.log("case state", state);
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];

    case "MARKED_COMPLETE":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });

    case "CLEAR_COMPLETE":
      return state.filter(todo => {
        return todo.completed === false;
      });
    default:
      return state;
  }
};

export default reducer;
