import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { GameState } from './redux/types';
import { Board } from './component/Board';
import { judgementWinner } from './utils/gameState';
import { createGameStateAction } from './redux/action';
import { store } from './redux/store';

const App: React.FC = () => {
  // レンダリング用データ
  const [update, setUpdata] = useState<boolean>(false);

  const currentData = store.getState();
  const turnNum = currentData.payload.turnNum;
  const markList = currentData.payload.markList;
  const nowPlayer = currentData.payload.nowPlayer;
  const winner = currentData.payload.winner;
  const StyledBody = styled.div`
    text-align: center;
  `;

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
    text-align: center;
  `;

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    const initGameState: GameState = {
      turnNum: 1,
      markList: Array(3)
        .fill('')
        .map(() => Array(3).fill('')),
      nowPlayer: 'X',
      winner: '',
    };
    const initAction = createGameStateAction(initGameState);
    store.dispatch(initAction);
    setUpdata(update ? false : true);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (winner === '' && turnNum < 10) {
      const clickIdx = Number(e.currentTarget.getAttribute('data-idx'));
      const currentGameState: GameState = {
        turnNum: turnNum,
        markList: markList,
        nowPlayer: nowPlayer,
        winner: winner,
      };
      const checkMapBlank = () => {
        return markList.map((row, rowidx) =>
          row.map((mark, idx) => {
            if (rowidx === Math.floor(clickIdx / 3) && idx === clickIdx % 3) {
              if (markList[rowidx][idx] === '') {
                const nextTurn = turnNum + 1;
                currentGameState.turnNum = nextTurn;
                currentGameState.nowPlayer = nextTurn % 2 !== 0 ? 'X' : 'O';
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
      currentGameState.markList = currentMap;
      const winnerMark = judgementWinner(currentMap);
      currentGameState.winner = winnerMark;
      const currentAction = createGameStateAction(currentGameState);
      store.dispatch(currentAction);
      setUpdata(update ? false : true);
    }
  };
  return (
    <StyledBody>
      <StyledWinner>Winner:{winner}</StyledWinner>
      <StyledResetButton onClick={initGame}>Reset</StyledResetButton>
      <Board playerMarkList={markList} setMark={handleClick} />
    </StyledBody>
  );
};

export default App;
