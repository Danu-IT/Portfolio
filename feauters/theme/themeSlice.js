import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: false,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, actions) => {
            state.theme = !state.theme
        }
    }
})

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;