import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList: []
}

const itemSlice = createSlice({
    name:"item",
    initialState,
    reducers:{
        setUser: (state, {payload})=>{
            state.userList = [...state.userList, payload]
        }
    }
})

const {reducer, actions} = itemSlice

export const {setUser} = actions

export default reducer

