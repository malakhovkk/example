import { createSlice } from "@reduxjs/toolkit";
import {fetchBooks} from './books.thunk.js'

const initialState = {
    books: [],
    booksState: 'initial' // initial , 'error' , 'loading'
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
      addBook: (state, action) => {
        state.books.push(action.payload)
      },}
      ,
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            console.log(action.payload)
            state.booksState = 'initial'
            state.books = action.payload
    });
        builder.addCase(fetchBooks.pending, (state, action) => {
            state.booksState = 'loading'
    });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.booksState = 'error'
    });
    }
})

export const booksSelector = (state) => state.books;

export default booksSlice.reducer;
export const {
    addBook
} = booksSlice.actions;