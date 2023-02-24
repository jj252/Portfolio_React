import { EDUCATION_INFO } from '../../app/shared/EDUCATION_INFO';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    educationArray:EDUCATION_INFO
}

const educationSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state,action) =>{
            console.log('addComment action.payload:',action.payload);
            console.log('addComment state.commentsArray',state.educationArray);
            const newComment = {
                id: state.educationArray.length + 1,
                ...action.payload
            }
            state.educationArray.push(newComment);
        }
    }
})

export const educationReducer = educationSlice.reducer;

export const { addComment } = educationSlice.actions;

export const selectCommentsByEducationId = (campsiteId) => (state) => {
    return EDUCATION_INFO.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};

export const selectCommentsByEducationId2 = (campsiteId) => {
    return EDUCATION_INFO.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};