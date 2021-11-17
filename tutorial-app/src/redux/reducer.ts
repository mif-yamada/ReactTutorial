import { ActionType, ActionTypes, GameState } from './types';

const initState: GameState = {
  turnNum: 1,
  markList: Array(3)
    .fill('')
    .map(() => Array(3).fill('')),
  nowPlayer: 'X',
  winner: '',
};

export const gameReducer = (
  state = initState,
  action: ActionType
): GameState => {
  switch (action.type) {
    case ActionTypes.CURRENT_GAMESTATE:
      return {
        ...state,
        turnNum: action.payload.turnNum,
        markList: action.payload.markList,
        nowPlayer: action.payload.nowPlayer,
        winner: action.payload.winner,
      };
    case ActionTypes.UPDATE_TURN_NUM:
      return {
        ...state,
        turnNum: action.payload.turnNum,
      };
    case ActionTypes.UPDATE_MARK_LIST:
      return {
        ...state,
        markList: action.payload.markList,
      };
    case ActionTypes.UPDATE_NOW_PLAYER:
      return {
        ...state,
        nowPlayer: action.payload.nowPlayer,
      };
    case ActionTypes.UPDATE_WINNER:
      return {
        ...state,
        winner: action.payload.winner,
      };
    default:
      return state;
  }
};
