import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AsyncStorage } from 'react-native';
const axios = require('axios').default;

//catslist har en dispatch(fetchcats(params)) funksjon
//når denne blir kjørt, blir createasyncthunk kjørt
//siden denne er av action-type fetchCats
//når denne blir kjørt, har den en action-payload-creator
//altså en funksjon som tar inn parametre fra dispatch funksjonen
//feks dispatch(fetchbyid(1)) har parameter 1, denne blir kjørt inn i
// action-creatoren
//i dette tilfelle skal vi jo ha hva ettersom bruker
//filtrerer/all data
//params blir derfor oppdatert i catsSlice filen




export const fetchPosts = createAsyncThunk(
    'cats/fetchCats',
    async (params: any) => {
        const response = await axios.get('http://it2810-10.idi.ntnu.no:3000/api/cat', {params})
        return response.data
    }
)

export const putLike = createAsyncThunk(
    'cats/putLike',
    async (likesAndId: any) => {
        await axios.post('http://it2810-10.idi.ntnu.no:3000/api/cat', likesAndId )
        return likesAndId
    }
)

const initialState = {
    cats: [],
    status: 'idle',
    error: null,
    totalPages: 5
}

export const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending.toString()]: (state, action) => {
            state.status = 'loading'
        },
        [fetchPosts.fulfilled.toString()]: (state, action) => {
            state.status = 'succeeded'
            state.cats = action.payload.posts
            state.totalPages = action.payload.totalPages
        },
        [fetchPosts.rejected.toString()]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
        [putLike.fulfilled.toString()]: (state: any, action: any) => {
            const {id} = action.payload
            const upvotedPost:any = state.cats.find((post: any) => post._id === id)
            if (upvotedPost){
                upvotedPost.post.likes++;
            }
        }
    }
})



export default catsSlice.reducer
export const selectPostById = (state: any, catId: string) =>
    state.cats.cats.find((cat: any) => cat._id === catId)
