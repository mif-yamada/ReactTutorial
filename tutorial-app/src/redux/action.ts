// Action...ユーザーの入力から生成されるもの
import { ActionType } from "./types";

export const createGameStateAction = (state:ActionType):ActionType => {
  return {
    type: state.type,
    payload: {
      turnNum:state.payload.turnNum,
      currentMap:state.payload.currentMap,
    },
  };
};
