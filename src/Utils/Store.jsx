import { configureStore } from "@reduxjs/toolkit"
import ToggleSlice from "./ToggleSlice";
import  AddNewComment  from "./Addcomment";

const store = configureStore({
    reducer:{
       toggle: ToggleSlice,
       comment: AddNewComment,
    }
})

export default store;