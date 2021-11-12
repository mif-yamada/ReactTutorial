import React, { useState } from 'react';

import './App.css';
import { Board } from './component/Board';
import { mapState } from './utils/gameState';

const App: React.FC = () => {
  const [turnNum, setTurnNum] = useState<number>(0);
  const [clickMapIdx, setClickMapIdx] = useState<number[]>([]);
  const [markList, setMarkList] = useState<string[][]>([]);

  const nowPlayer = turnNum % 2 === 0 ? 'X' : 'O';

  const handleClick = () => {
    setTurnNum(turnNum + 1);
  };
  return (
    <div className='App'>
      <Board playerMarkList={markList} setMark={handleClick} />
    </div>
  );
};

export default App;
