export const ActionTypes = {
  CURRENT_GAMESTATE: 'CURRENT_GAMESTATE' as const,
  UPDATE_TURN_NUM: 'UPDATE_TURN_NUM' as const,
  UPDATE_MARK_LIST: 'UPDATE_MARK_LIST' as const,
  UPDATE_NOW_PLAYER: 'UPDATE_NOW_PLAYER' as const,
  UPDATE_WINNER: 'UPDATE_WINNER' as const,
};

export type Actions =
  | 'CURRENT_GAMESTATE'
  | 'UPDATE_TURN_NUM'
  | 'UPDATE_MARK_LIST'
  | 'UPDATE_NOW_PLAYER'
  | 'UPDATE_WINNER';

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
