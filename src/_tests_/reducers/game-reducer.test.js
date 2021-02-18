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
    expect(gameReducer(undefined, { type: null })).toEqual({});
  }); // passing in undefined instead of an empty object

  test('Should change the value of the board on click', () => {
    const { history, stepNumber, xIsNext, id } = gameData;
    console.log(history);
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

// Notes on testing: 
// testing state! don't forget
// test for changes in state or reference to where state is set
// can test for null
// can test bool
// can test for an empty array or elements in an array

// Keep in mind the data structure of state when setting up tests. Which option follows our state object (in Game.js) the best? Probably the second option

// first option - current
// {
//   1: {
//     history: [{
//       squares: ['X', 'O', null, null, null, null, null, null, null],
//     }],
//     stepNumber: 3,
//     xIsNext: true,
//     id: 1
//   },
//   2: {
//     history: [{
//       squares: ['X', 'O', 'X', null, null, null, null, null, null],
//     }],
//     stepNumber: 4,
//     xIsNext: false,
//     id: 2
//   },
//   3: {
//     history: [{
//       squares: ['X', 'O', 'X', 'O', null, null, null, null, null],
//     }],
//     stepNumber: 5,
//     xIsNext: true,
//     id: 3
//   }
// }

// // second option - follows state object structure
// {
//   history: [{
//     squares: ['X', 'O', 'X', 'O', null, null, null, null, null],
//   }],
//   stepNumber: 5,
//   xIsNext: true
// }

// // third option
// {
//   1: {
//     history: [{
//       squares: ['X', 'O', null, null, null, null, null, null, null],
//     }],
//     id: 1
//   },
//   2: {
//     history: [{
//       squares: ['X', 'O', 'X', null, null, null, null, null, null],
//     }],
//     id: 2
//   },
//   3: {
//     history: [{
//       squares: ['X', 'O', 'X', 'O', null, null, null, null, null],
//     }]
//     id: 3
//   }
//   stepNumber: 5,
//   xIsNext: true
// }