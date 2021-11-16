import { ActionType } from './types';

const initState: ActionType = {
  type: 'CURRENT_GAMESTATE',
  payload: {
    turnNum: 1,
    markList: Array(3)
      .fill('')
      .map(() => Array(3).fill('')),
    nowPlayer: 'X',
    winner: '',
  },
};

export const gameReducer = (
  state = initState,
  action: ActionType
): ActionType => {
  switch (action.type) {
    case 'CURRENT_GAMESTATE':
      return {
        type: 'CURRENT_GAMESTATE',
        payload: {
          turnNum: action.payload.turnNum,
          markList: action.payload.markList,
          nowPlayer: action.payload.nowPlayer,
          winner: action.payload.winner,
        },
      };
    default:
      return state;
  }
};
