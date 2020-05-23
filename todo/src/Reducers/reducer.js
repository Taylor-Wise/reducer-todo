export const initialState = [
  {
    item: "This is a task!",
    completed: false,
    id: 1,
  },
  {
    item: "This is a completed task!",
    completed: true,
    id: 2,
  },
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now(),
        },
      ];

    case "TOGGLE_COMPLETE":
      return state.map((task) => {
        if (action.payload === task.id) {
          return {
            ...task,
          completed: !task.completed
        }
        }
        return task
      });

    case "CLEAR_COMPLETE":
      return state.filter((task) => {return !task.completed });

    default: 
    return state;
  }
};
