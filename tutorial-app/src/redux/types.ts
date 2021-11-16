import { Action } from 'redux';

export type Actions ='CURRENT_GAMESTATE';
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
  payload: GameState;
  type: Actions;
}
