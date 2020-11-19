import { configureStore } from '@reduxjs/toolkit'
import catsReducer from "./CatsSlice"
import paramsReducer from "./ParamsSlice"

export default configureStore({
    reducer: {
      cats: catsReducer,
      params: paramsReducer
    }
});