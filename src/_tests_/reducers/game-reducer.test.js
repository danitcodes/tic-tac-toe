import gameReducer from '../../reducers/game-reducer';

describe('gameReducer', () => {

  test('Should return a default state if no action is passed into the reducer', () => {
    expect(gameReducer({}, {type: null})).toEqual({});
  });

  
});