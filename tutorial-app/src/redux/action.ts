// Action...ユーザーの入力から生成されるもの
import { ActionType } from "./types";

export const createGameStateAction = (state:ActionType):ActionType => {
  return {
    type: state.type,
    payload: {
      turnNum:state.payload.turnNum,
      markList: state.payload.markList,
      nowPlayer: state.payload.nowPlayer,
      winner:state.payload.winner
    },
  };
};
