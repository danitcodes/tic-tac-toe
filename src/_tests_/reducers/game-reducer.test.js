import gameReducer from '../../reducers/game-reducer';

describe('gameReducer', () => {

  let action;
  const gameData = {
    1: {
      history: [{
        squares: ['X', 'O', null, null, null, null, null, null, null],
      }],
      stepNumber: 3,
      xIsNext: true,
      id: 1
    },
    2: {
      history: [{
        squares: ['X', 'O', 'X', null, null, null, null, null, null],
      }],
      stepNumber: 4,
      xIsNext: false,
      id: 2
    }
  };

  test('Should return a default state if no action is passed into the reducer', () => {
    expect(gameReducer({}, { type: null })).toEqual({});
  });

  test('Should change the value of the board on click', () => {
    const { history, stepNumber, xIsNext, id } = gameData;
    action = {
      type: 'UPDATE_BOARD',
      history,
      stepNumber,
      xIsNext,
      id,
    };
    expect(gameReducer({}, action)).toEqual({
      [id]: {
        history,
        stepNumber,
        xIsNext,
        id
      }
    });
  });

  test('Should update the value of the board on click to new turn', () => {
    console.log(gameData);
    const { history, stepNumber, xIsNext, id } = gameData;
    action = {
      type: 'UPDATE_BOARD',
      history: [{
        squares: ['X', 'O', 'X', 'O', null, null, null, null, null],
      }],
      stepNumber: 5,
      xIsNext: true,
      id: 3
    };
    console.log(gameData);
    expect(gameReducer(gameData, action)).toEqual({
      1: {
        history: [{
          squares: ['X', 'O', null, null, null, null, null, null, null],
        }],
        stepNumber: 3,
        xIsNext: true,
        id: 1
      },
      2: {
        history: [{
          squares: ['X', 'O', 'X', null, null, null, null, null, null],
        }],
        stepNumber: 4,
        xIsNext: false,
        id: 2
      },
      3: {
        history: [{
          squares: ['X', 'O', 'X', 'O', null, null, null, null, null],
        }],
        stepNumber: 5,
        xIsNext: true,
        id: 3
      } 
    });
  });
});

// testing state! don't forget
// test for changes in state or reference to where state is set
// can test for null
// can test bool - is it true or false
// can test for an empty array or elements in an array