import stepReducer from '../../reducers/step-reducer';

describe('stepReducer', () => {

  let action;
  const jumpToData = {
    stepNumber: 1,
    xIsNext: false
  };

  test('Should successfully show state at step one', () => {
      const { stepNumber, xIsNext } = jumpToData;
      action = {
        type: 'JUMP_TO_STEP',
        stepNumber: stepNumber,
        xIsNext: xIsNext
      };
    expect(stepReducer({}, action)).toEqual({
      stepNumber: 1,
      xIsNext: false
    });
  });

});