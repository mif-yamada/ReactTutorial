import React, { useState, useEffect } from 'react';

import './App.css';
import { Board } from './component/Board';

const App: React.FC = () => {
  const [turnNum, setTurnNum] = useState<number>(0);
  const [clickIdx, setClickIdx] = useState<number>(0);
  const [markList, setMarkList] = useState<string[][]>([]);
  const [nowPlayer, setNowPlayer] = useState<string>('');

  useEffect(() => {
    setMarkList(
      Array(3)
        .fill(null)
        .map(() => Array(3).fill(null))
    );
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setNowPlayer(turnNum % 2 === 0 ? 'X' : 'O');
    setClickIdx(Number(e.currentTarget.getAttribute('data-idx')));
    setMarkList(
      markList.map((row, rowidx) => {
        const updateRow = row.map((mark, idx) => {
          if (rowidx === Math.floor(clickIdx / 3) && idx === clickIdx % 3) {
            if (markList[rowidx][idx] === null) {
              return nowPlayer;
            }
          }
          return mark;
        });
        return updateRow;
      })
    );
    setTurnNum(turnNum + 1);
  };

  console.log(markList);
  console.log(nowPlayer);
  console.log(clickIdx);
  return (
    <div className='App'>
      <Board
        playerMarkList={markList}
        setMark={handleClick}
      />
    </div>
  );
};

export default App;
