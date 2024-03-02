import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books/books.reducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    books: booksReducer
  });


export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production" 
})