// Action...ユーザーの入力から生成されるもの
import {ActionType,GameState} from "./types";

export const createGameStateAction = (state:GameState):ActionType => {
  return {
    type: 'CURRENT_GAMESTATE',
    payload:state
  };
};
