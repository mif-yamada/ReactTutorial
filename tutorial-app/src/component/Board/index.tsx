import React from 'react';
import styled from '@emotion/styled';

import { Square } from '../Square';

interface BoardProps {
  playerMarkList: string[][];
  setMark: (e: React.MouseEvent<HTMLElement>) => void;
}

const StyledBoard = styled.table`
  clear: both;
  content: '';
`;

const Board: React.FC<BoardProps> = (props: BoardProps) => {
  const { playerMarkList, setMark } = props;
  return (
    <StyledBoard>
      <tbody>
        {playerMarkList.map((rowMarkList, idx) => {
          return (
            <tr key={`id=${idx}`}>
              {rowMarkList.map((mark, i) => {
                return (
                  <td key={`id=${i}`}>
                    <Square
                      squareIdx={idx * 3 + i }
                      playerMark={playerMarkList[idx][i]}
                      onClick={setMark}
                    ></Square>
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
