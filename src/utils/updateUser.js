import { createSlice } from '@reduxjs/toolkit';

export const updateUser = createSlice({
    name: 'user',
    initialState: {
        phoneNumber: 0,
        profession: "",
        fullName: "",
        upiId: ""

    },
    reducers:  {
        phoneNumber: (state, action) =>  {
            state.phoneNumber= action.payload
        },
        profession: (state, action) => {
            state.profession = action.payload
        },
        fullName: (state, action) => {
            state.fullName = action.payload
        },
        upiId: (state, action) => {
            state.upiId = action.payload
        }
    }
})
console.log("----------",updateUser.actions.phoneNumber())
export const {phoneNumber, profession, fullName, upiId} = updateUser.actions

export const selectPhNumber = state => state.user.phoneNumber;
export const selectProfession = state => state.user.profession;
export const selectFullName = state => state.user.fullName;
export const selectUpiID= state => state.user.upiId;

export default updateUser.reducer