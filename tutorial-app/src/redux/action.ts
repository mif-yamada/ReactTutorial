import { ActionTypes, ActionType, GameState } from './types';

export const setCurrentGameStateAction = (state: GameState): ActionType => {
  return {
    type: ActionTypes.CURRENT_GAMESTATE,
    payload: state,
  };
};
export const updateTurnNumAction = (
  state: GameState,
  currentTurnNum: number
): ActionType => {
  return {
    type: ActionTypes.UPDATE_TURN_NUM,
    payload: { ...state, turnNum: currentTurnNum },
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
export const updateNowPlayerAction = (
  state: GameState,
  currentNowPlayer: string
): ActionType => {
  return {
    type: ActionTypes.UPDATE_NOW_PLAYER,
    payload: { ...state, nowPlayer: currentNowPlayer },
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
