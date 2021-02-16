import gameReducer from '../../reducers/game-reducer';

describe('gameReducer', () => {
  test('Should return a default state if no action is passed into the reducer', () => {
    expect(gameReducer({}, {type: null})).toEqual({});
  });

});

// testing state! don't forget
// test for changes in state or reference to where state is set
// can test for null
// can test bool - is it true or false
// can test for an empty array or elements in an array