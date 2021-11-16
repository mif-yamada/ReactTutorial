import { Action } from 'redux';

export const CURRENT_GAMESTATE = 'CURRENT_GAMESTATE';

// 複数Actionある時はUnion型？
export type Actions = 'CURRENT_GAMESTATE';
export interface currentGameState extends Action {
  type: 'CURRENT_GAMESTATE';
}

export interface GameState {
  turnNum: number;
  markList: string[][];
  nowPlayer: string;
  winner: string;
}

export interface ActionType {
  type: Actions;
  payload: GameState;
}
