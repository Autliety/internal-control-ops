import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

interface CounterState {
  username: string,
}

const initialState: CounterState = {
  username: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {

    login: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },

    logout: (state) => {
      state.username = '';
    }
  }
});

export const { login, logout } = loginSlice.actions;
export const selectCount = (state: RootState) => state.login.username;
export default loginSlice.reducer;

