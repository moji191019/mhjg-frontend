import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface JoinState {
  email: string;
  name: string;
  password: string;
  password_check: string;
}

const initialState: JoinState = {
  email: '',
  name: '',
  password: '',
  password_check: '',
};

const joinSlice = createSlice({
  name: 'joinData',
  initialState,
  reducers: {
    setJoinData(state, action: PayloadAction<JoinState>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setJoinData } = joinSlice.actions;

export default joinSlice;
