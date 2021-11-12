import React from 'react';
import styled from '@emotion/styled';

import { Square } from '../Square';

interface BoardProps {
  playerMarkList: string[][];
  playerMark: string;
  setMark: () => void;
}

const StyledBoard = styled.table`
  clear: both;
  content: '';
`;

const Board: React.FC<BoardProps> = (props: BoardProps) => {
  const { playerMarkList, playerMark, setMark } = props;
  return (
    <StyledBoard>
      <tbody>
        {playerMarkList.map((rowMarkList, idx) => {
          return (
            <tr key={`id=${idx}`}>
              {rowMarkList.map((mark, i) => {
                return (
                  <td key={`id=${i}`}>
                    <Square playerMark={playerMark} onClick={setMark}></Square>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledBoard>
  );
};

export { Board };
