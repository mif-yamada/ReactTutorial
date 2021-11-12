import React from 'react';
import styled from '@emotion/styled';

interface SquareProps {
  playerMark: string;
  onClick: () => void;
}

const StyledSquare = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  &:focus {
    outline: none;
  }
`;

const Square: React.FC<SquareProps> = (props: SquareProps) => {
  const { playerMark, onClick } = props;
  return <StyledSquare onClick={onClick}>{playerMark}</StyledSquare>;
};

export { Square };
