import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import { Board } from './component/Board';
import {
  setCurrentGameStateAction,
  updateMarkListAction,
  updateNextGameAction,
  updateWinnerAction,
} from './redux/action';
import { GameState } from './redux/types';
import { judgementWinner } from './utils/gameState';

const App: React.FC = () => {
  const currentData = useSelector<GameState, GameState>((state) => state);
  const turnNum = useSelector<GameState, number>((state) => state.turnNum);
  const markList = useSelector<GameState, string[][]>(
    (state) => state.markList
  );
  const nowPlayer = useSelector<GameState, string>((state) => state.nowPlayer);
  const winner = useSelector<GameState, string>((state) => state.winner);

  const dispatch = useDispatch();

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
    const initAction = setCurrentGameStateAction(initGameState);
    dispatch(initAction);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (winner === '' && turnNum < 10) {
      const clickIdx = Number(e.currentTarget.id);
      const checkMapBlank = () => {
        return markList.map((row, rowidx) =>
          row.map((mark, idx) => {
            if (rowidx === Math.floor(clickIdx / 3) && idx === clickIdx % 3) {
              if (markList[rowidx][idx] === '') {
                const nextTurn = turnNum + 1;
                const nextPlayer = nextTurn % 2 !== 0 ? 'X' : 'O';
                dispatch(
                  updateNextGameAction(currentData, nextTurn, nextPlayer)
                );
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
      dispatch(updateMarkListAction(currentData, currentMap));
      const winnerMark = judgementWinner(currentMap);
      dispatch(updateWinnerAction(currentData, winnerMark));
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
