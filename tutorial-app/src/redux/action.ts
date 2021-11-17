import { ActionTypes, ActionType, GameState } from './types';

export const setCurrentGameStateAction = (state: GameState): ActionType => {
  return {
    type: ActionTypes.CURRENT_GAMESTATE,
    payload: state,
  };
};
export const updateNextGameAction = (
  state: GameState,
    currentTurnNum: number,
  currentNowPlayer: string
): ActionType => {
  return {
    type: ActionTypes.UPDATE_NEXT_GAME,
    payload: { ...state,  turnNum: currentTurnNum ,nowPlayer: currentNowPlayer },
  };
};
export const updateMarkListAction = (
  state: GameState,
  markList: string[][]
): ActionType => {
  return {
    type: ActionTypes.UPDATE_MARK_LIST,
    payload: { ...state, markList: markList },
  };
};
export const updateWinnerAction = (
  state: GameState,
  currentWinner: string
): ActionType => {
  return {
    type: ActionTypes.UPDATE_WINNER,
    payload: { ...state, winner: currentWinner },
  };
};
