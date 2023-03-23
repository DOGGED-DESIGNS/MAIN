export const Reducework = (state, action) => {
  switch (action.type) {
    case "DRAW":
      return action.payload;
    case "DELETE":
      return state.filter((ta) => ta.id !== action.payload.id);

    default:
      return state;
  }
};
