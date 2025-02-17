import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageService } from "@/helpers/LocalStorageService";
import { IBook, initialBooks } from "./Books.data";

const getInitialState = () => {
  const data = LocalStorageService.get("books");
  if (data) return data;
  return initialBooks;
};

export const booksSlice = createSlice({
  name: "books",
  initialState: getInitialState(),
  reducers: {
    bookAdded: (state, action) => {
      action.payload.id = state[state.length - 1].id + 1;
      state.push(action.payload);
    },
    bookDeleted: (state, action) => {
      state = state.filter((book: IBook) => book.id !== action.payload);
    },
    bookEdited: (state, action) => {
      let editedBookIdInArray = null;
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          editedBookIdInArray = i;
          break;
        }
      }
      if (editedBookIdInArray !== null) {
        state = state.slice(0, editedBookIdInArray).concat(action.payload, state.slice(editedBookIdInArray + 1));
      }
    },
  },
});

export const { bookAdded, bookDeleted, bookEdited } = booksSlice.actions;
export default booksSlice.reducer;
