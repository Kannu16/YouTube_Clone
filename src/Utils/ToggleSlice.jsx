import { createSlice } from "@reduxjs/toolkit";

const toggle = createSlice({
 
    name:"toggle",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) =>{
            state.isMenuOpen =! state.isMenuOpen
        }
    }
})

export const {toggleMenu} = toggle.actions;

export default toggle.reducer;