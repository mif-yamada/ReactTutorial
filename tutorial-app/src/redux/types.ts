import { Action } from 'redux';


export const CURRENT_GAMESTATE = 'CURRENT_GAMESTATE';


export type Actions ='CURRENT_GAMESTATE';
export interface currentGameState extends Action {
  type: 'CURRENT_GAMESTATE';
}

export interface Payload {
  turnNum: number;
  currentMap: string[][];
}

export interface ActionType {
  type: Actions;
  payload: Payload;
}
