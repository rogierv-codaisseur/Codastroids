import { MOVE_PLAYER2, RECEIVE_MOVE2, PLAYER_TURN } from '../constants/actionTypes';

const initialState = {
  position: [0, 0],
  spriteLocation: '0px 0px',
  direction: 'Right',
  walkIndex: 0,
  playerTurn: false,
};

const player2 = (state = initialState, action) => {
  const { position, walkIndex, spriteLocation } = action;
  switch (action.type) {
    case MOVE_PLAYER2:
      return {
        ...action.payload
      };
    case RECEIVE_MOVE2:
      return {
        position,
        direction: action.action,
        walkIndex,
        spriteLocation,
      };
    case PLAYER_TURN:
      return !state.playerTurn

    default:
      return state;
  }
};

export default player2;