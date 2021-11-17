import React from 'react';
import styled from '@emotion/styled';
import shortid from 'shortid';

import { Square } from '../Square';

interface BoardProps {
  playerMarkList: string[][];
  setMark: (e: React.MouseEvent<HTMLElement>) => void;
}

const StyledBoard = styled.table`
  clear: both;
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const Board: React.FC<BoardProps> = (props: BoardProps) => {
  const { playerMarkList, setMark } = props;
  return (
    <StyledBoard>
      <tbody>
        {playerMarkList.map((rowMarkList, idx) => {
          return (
            <tr key={`id=${shortid.generate()}`}>
              {rowMarkList.map((mark, i) => {
                return (
                  <td key={`id=${shortid.generate()}`}>
                    <Square
                      squareIdx={idx * 3 + i}
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
