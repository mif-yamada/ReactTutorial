import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { GameState } from './types';

const initState = {
  turnNum: 1,
  markList: Array(3)
    .fill('')
    .map(() => Array(3).fill('')),
  nowPlayer: '',
  winner: '',
} as GameState;

export const gameReducers = createSlice({
  name: 'game',
  initialState:initState,
  reducers: {
    CURRENT_GAMESTATE: (state, action:PayloadAction<GameState>) => {
      state.turnNum = action.payload.turnNum;
      state.markList = action.payload.markList;
      state.nowPlayer = action.payload.nowPlayer;
      state.winner = action.payload.winner;
    },
  },
});

export const { CURRENT_GAMESTATE } = gameReducers.actions;

export const selectGameState = (state: RootState) => state.game;

export const gameReducer = gameReducers.reducer;
