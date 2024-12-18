import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'theme',
    initialState: { theme: 'default', darkMode: false, isModalOpen: false },
    reducers: {
        changeTheme: (state, { payload: { theme, darkMode } }) => {
            if (typeof theme !== 'undefined') {
                state.theme = theme;
            }
            if (typeof darkMode !== 'undefined') {
                state.darkMode = false;
            }
        },
        setDefaultTheme: (state, { payload: { theme, darkMode } }) => {
            if (!state.theme) {
                if (typeof theme !== 'undefined') {
                    state.theme = theme;
                }
                if (typeof darkMode !== 'undefined') {
                    state.darkMode = darkMode;
                }
            }
        },
    },
});
export const { changeTheme, setDefaultTheme } = slice.actions;
export default slice.reducer;
