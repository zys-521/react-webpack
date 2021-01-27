function todosReducer(state, action) {
  switch (action.type) {
    case 'test':
      return {...state, text: action.text};
    default:
      return state;
  }
}

export default todosReducer;