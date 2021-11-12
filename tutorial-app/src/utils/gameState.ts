// プレイヤーの選択状態
export const mapState = (player: string, row: number, col: number, mapList: string[][]) => {
  const updateMap = mapList.map((rowArray, idx, list) => {
    rowArray.map((val, i) => {
      if (idx === row && i === col) {
        return list[idx][i] = player;
      }
    });
  });
  return updateMap;
};
