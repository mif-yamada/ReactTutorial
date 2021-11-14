export const judgementWinner = (currentMap: string[][]):string => {
  const colList = currentMap.map((row, rowIdx) =>
    row.map((mark, idx) => {
      return currentMap[idx][rowIdx];
    })
  );
  const crossList: string[][] = Array(2).fill([]).map((row: string[], rowIdx) => {
    if (rowIdx === 0) {
      return Array(3).fill('').map((val, idx) => currentMap[idx][idx]);
    } else {
      return Array(3).fill('').map((val, idx) => currentMap[2 - idx][idx]);
    }
  });
  const allList = currentMap.concat(colList, crossList);
  const winnerList = allList.filter(
    (array) =>
      array.filter((val) => val !== '' && val === array[0]).length === 3
  );
  if (winnerList.length !== 0) {
    const winnerMark = winnerList[0][0];
    return winnerMark;
  } else {
    return '';
  }
};
// TODO:ヒストリー表示？
