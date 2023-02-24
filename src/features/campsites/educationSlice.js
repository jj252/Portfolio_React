import { EDUCATION } from "../../app/shared/EDUCATION";
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    educationArray:EDUCATION
}

const educationSlice = createSlice({
    name:'education',
    initialState
})

export const educationReducer = educationSlice.reducer;

export const selectAllEducation = (state) =>{
    return state.education.educationArray;
}

export const selectRandomEducation = () => {
    //return CAMPSITES.find((randomSite) => randomSite.id === Math.floor(Math.random() * randomSite.length))
    return EDUCATION[Math.floor(EDUCATION.length * Math.random())];
    
}

export const selectEducationById = (id) => (state) => {
    return state.education.educationArray.find((education) => education.id === parseInt(id));
}

export const selectFeaturedEducation = (state) =>{
    return state.education.educationArray.find((education) => education.featured)
}