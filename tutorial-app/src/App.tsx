import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import './App.css';
import { Board } from './component/Board';
import { judgementWinner } from './utils/gameState';

const App: React.FC = () => {
  const [turnNum, setTurnNum] = useState<number>(0);
  const [markList, setMarkList] = useState<string[][]>([]);
  const [nowPlayer, setNextPlayer] = useState<string>('');
  const [winner, setWinner] = useState<string>('');

  const StyledResetButton = styled.button`
    display: inline-block;
    margin: 5px 20px;
    background-color: rgb(234, 154, 190);
    padding: 7px 20px;
    font-size: 15px;
    color: #fef9ff;
    text-align: center;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    box-shadow: 0 5px 2px rgb(203, 93, 139);
    &:active {
      box-shadow: none;
      position: relative;
      top: 5px;
    }
  `;

  const StyledWinner = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #db2e6d;
    margin: 10px;
  `;

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    const initTurn = 1;
    const initMap = Array(3)
      .fill('')
      .map(() => Array(3).fill(''));
    setTurnNum(initTurn);
    setNextPlayer(initTurn % 2 !== 0 ? 'X' : 'O');
    setMarkList(initMap);
    setWinner('');
  };

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
      <StyledWinner>Winner:{winner}</StyledWinner>
      <StyledResetButton onClick={initGame}>Reset</StyledResetButton>
      <Board playerMarkList={markList} setMark={handleClick} />
    </div>
  );
};

export default App;
