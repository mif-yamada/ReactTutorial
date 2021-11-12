import React, { useState,useEffect } from 'react';

import './App.css';
import { Board } from './component/Board';

const App: React.FC = () => {
  const [turnNum, setTurnNum] = useState<number>(0);
  const [markList, setMarkList] = useState<string[][]>([]);
  const [nowPlayer, setNowPlayer] = useState<string>('');

  useEffect(() => {
    setMarkList ( [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ]);
  }, []);

  const handleClick = () => {
    setNowPlayer(turnNum % 2 === 0 ? 'X' : 'O');
    setTurnNum(turnNum + 1);
  };

  return (
    <div className='App'>
      <Board
        playerMarkList={markList}
        playerMark={nowPlayer}
        setMark={handleClick}
      />
    </div>
  );
};

export default App;
