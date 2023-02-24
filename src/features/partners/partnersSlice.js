import {PARTNERS} from '../../app/shared/PARTNERS';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    partnersArray: PARTNERS
}

const partnersSlice = createSlice({
    name: 'partners',
    initialState
})

export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) =>{
    //return state.partners.partnersArray;
    return state.partners.partnersArray.filter((partner) => partner.id < 3);
}

export const selectSpecificPartners = (state) =>{
    return state.partners.partnersArray.filter((partner) => partner.id > 3 && partner.id <7);
}

export const selectSpecificPartners2 = (state) =>{
    return state.partners.partnersArray.filter((partner) => partner.id > 7 && partner.id <11);
}

export const selectFeaturedPartner = (state) =>{
    return state.partners.partnersArray.find((partner) => partner.featured);
}

