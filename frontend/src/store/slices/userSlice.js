import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    userInfo: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            const userInfo = action.payload;
            state.isLoggedIn = true;
            state.userInfo = userInfo;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.userInfo = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;