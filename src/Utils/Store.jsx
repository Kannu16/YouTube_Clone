import { configureStore } from "@reduxjs/toolkit"
import ToggleSlice from "./ToggleSlice";
import  AddNewComment  from "./Addcomment";
import LiveChatSlice from "./LiveChatSlice";


const store = configureStore({
    reducer:{
       toggle: ToggleSlice,
       comment: AddNewComment,
       livechat: LiveChatSlice
    }
})

export default store;