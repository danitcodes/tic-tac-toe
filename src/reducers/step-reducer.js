export default (state= {}, action) => {
  const { stepNumber, xIsNext }  = action
  switch (action.type) {
    case 'JUMP_TO_STEP':
      return Object.assign({}, state, {
        stepNumber: stepNumber,
        xIsNext: xIsNext
      });
  default:
    return state;
  }
};