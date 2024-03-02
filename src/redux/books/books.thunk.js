import { createAsyncThunk, ThunkDispatch } from "@reduxjs/toolkit";
import { getBooks } from "../../api/services";

export const fetchBooks = createAsyncThunk(
    "books/fetchBooks",
    async function (_, { rejectWithValue, dispatch }) {
      try {

        const response = await getBooks()

        console.log(response.data.data);
  
        return response?.data.data;
      } catch (error) {
        return rejectWithValue("error");
      }
    }
  );