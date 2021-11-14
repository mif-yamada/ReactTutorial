import React, { useState, useEffect } from 'react';

import './App.css';
import { Board } from './component/Board';
import { judgementWinner } from './utils/gameState';

const App: React.FC = () => {
  const [turnNum, setTurnNum] = useState<number>(0);
  const [markList, setMarkList] = useState<string[][]>([]);
  const [nowPlayer, setNextPlayer] = useState<string>('');
  const [winner, setWinner] = useState<string>('');

  useEffect(() => {
    const initTurn = 1;
    const initMap = Array(3)
      .fill('')
      .map(() => Array(3).fill(''));
    console.log(initMap);
    setTurnNum(initTurn);
    setNextPlayer(initTurn % 2 !== 0 ? 'X' : 'O');
    setMarkList(initMap);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (winner === '') {
      const clickIdx = Number(e.currentTarget.getAttribute('data-idx'));
      const checkMapBlank = () => {
        return markList.map((row, rowidx) =>
          row.map((mark, idx) => {
            if (rowidx === Math.floor(clickIdx / 3) && idx === clickIdx % 3) {
              if (markList[rowidx][idx] === '') {
                const nextTurn = turnNum + 1;
                setTurnNum(nextTurn);
                setNextPlayer(nextTurn % 2 !== 0 ? 'X' : 'O');
                return nowPlayer;
              } else {
                return mark;
              }
            }
            return mark;
          })
        );
      };
      const currentMap = checkMapBlank();
      setMarkList(currentMap);
      const winnerMark = judgementWinner(currentMap);
      setWinner(winnerMark);
    }
  };

  return (
    <div className='App'>
      <div>Winner:{winner}</div>
      <Board playerMarkList={markList} setMark={handleClick} />
    </div>
  );
};

export default App;
