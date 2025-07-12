import {createSlice} from '@reduxjs/toolkit';
import Cookie from 'js-cookie';

interface Themestate{
    darkMode: boolean
}

const cookieTheme = Cookie.get("theme");

const initialState: Themestate = {
    darkMode: cookieTheme === "dark"
}

const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode;
            
            Cookie.set("theme", state.darkMode ?  "dark" : "light", {expires : 7})

            if (state.darkMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    }
})

export const {toggleTheme} = ThemeSlice.actions

export default ThemeSlice.reducer




