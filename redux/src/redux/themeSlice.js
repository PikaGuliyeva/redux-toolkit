
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        mode: "light"
    },
    reducers: {
        changeTheme: (state) => {
            if (state.mode === "light") {
                state.mode = "dark";
            } else {
                state.mode = "light";
            }
        }
    }
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
