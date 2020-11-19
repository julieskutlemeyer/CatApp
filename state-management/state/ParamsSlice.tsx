import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sortby: "",
    page: 1,
    search: "",
    gender: "",
    limit: 5
}

export const paramsSlice = createSlice({
    name: 'params',
    initialState,
    reducers: {
        pageClicked: (state: any) => {
            state.page += 1;
        },
        searchClicked: (state: any, action: any) => {
            state.search = action.payload
            state.limit = 5
        },
        filterClicked: (state: any, action: any) => {
            state.gender = action.payload
            state.limit = 5
        },
        sortClicked: (state: any, action: any) => {
            state.sortby = action.payload
            state.limit = 5
        },
         morePage: (state: any) => {
             state.limit +=5
         }
        }
    
})




export const { pageClicked, searchClicked, filterClicked, sortClicked, morePage} = paramsSlice.actions
//{type: "params/pageClicked"}

export default paramsSlice.reducer