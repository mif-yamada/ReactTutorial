import React from 'react';
import styled from '@emotion/styled';

interface SquareProps {
  squareIdx: number;
  playerMark: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const StyledSquare = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 30px;
  font-weight: bold;
  line-height: 34px;
  height: 40px;
  width: 40px;
  margin-right: -5px;
  margin-top: -5px;
  padding: 0;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const Square: React.FC<SquareProps> = (props: SquareProps) => {
  const { squareIdx, playerMark, onClick } = props;
  return (
    <StyledSquare data-idx={squareIdx} onClick={onClick}>{playerMark}</StyledSquare>
  );
};

export { Square };
