export default (state= {}, action) => {
  const {history, stepNumber, xIsNext, id} = action;
  switch (action.type) {
    case 'UPDATE_BOARD':
      return Object.assign({}, state, {
        [id]: {
          history,
          stepNumber,
          xIsNext,
          id,
        }
      });
      default:
        return state;
      };
  };