import { createSlice } from "@reduxjs/toolkit";
import { comment } from "./Comments";

const AddNewComment = createSlice({
    name: "comment",
    initialState :{
        commentsArray : comment
    },
    reducers:{
        addComment: (state, action) =>{
           state.commentsArray.unshift(action.payload)
        }
    }
})

export const {addComment} = AddNewComment.actions
export default AddNewComment.reducer