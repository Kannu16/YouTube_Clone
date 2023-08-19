import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
    name : "livechat",
    initialState:{
        liveChatList: []
    },
    reducers:{
        addlivemessage:(state, action) =>{
            state.liveChatList.splice(20, 1)
            state.liveChatList.unshift(action.payload)
        }
    }
})

 export const {addlivemessage} = LiveChatSlice.actions
 export default LiveChatSlice.reducer;
