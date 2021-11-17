export const ActionTypes = {
  CURRENT_GAMESTATE: 'CURRENT_GAMESTATE' as const,
  UPDATE_NEXT_GAME: 'UPDATE_NEXT_GAME' as const,
  UPDATE_MARK_LIST: 'UPDATE_MARK_LIST' as const,
  UPDATE_WINNER: 'UPDATE_WINNER' as const,
};

export type Actions =
  | 'CURRENT_GAMESTATE'
  | 'UPDATE_NEXT_GAME'
  | 'UPDATE_MARK_LIST'
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
