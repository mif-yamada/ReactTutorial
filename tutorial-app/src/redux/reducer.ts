// reducer...Actionから、新たなStateに書き換える
import { ActionType } from './types';

const initState: ActionType = {
  type: 'CURRENT_GAMESTATE',
  payload: {
    turnNum: 1,
    currentMap: Array(3)
      .fill('')
      .map(() => Array(3).fill('')),
  },
};

// TODO:state actionの型付け
export const gameReducer = (state = initState, action: ActionType): ActionType => {
  switch (action.type) {
    case 'CURRENT_GAMESTATE':
      return {
        type: action.type,
        payload: {
          turnNum: action.payload.turnNum,
          currentMap: action.payload.currentMap,
        },
      };
    default:
      return state;
  }
};
