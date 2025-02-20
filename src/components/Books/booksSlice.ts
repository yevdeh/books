import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "./Books.model";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [] as IBook[],
    editedBookId: null,
  },
  reducers: {
    bookAdded: (state, action) => {
      const books = state.books;
      const nextId = books.length === 0 ? 1 : books[books.length - 1].id + 1;
      return {
        books: books.concat({ ...action.payload, id: nextId }),
        editedBookId: null,
      };
    },
    bookDeleted: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book: IBook) => book.id !== action.payload),
      };
    },
    bookEdited: (state, action) => {
      const books = state.books;
      let editedBookIdInArray = null;
      for (let i = 0; i < books.length; i++) {
        if (books[i].id === action.payload.id) {
          editedBookIdInArray = i;
          break;
        }
      }
      if (editedBookIdInArray !== null) {
        return {
          ...state,
          books: books.slice(0, editedBookIdInArray).concat(action.payload, books.slice(editedBookIdInArray + 1)),
        };
      }
      return state;
    },
    bookFormOpenedToAdd: (state) => ({
      ...state,
      editedBookId: null,
    }),
    bookFormOpenedToEdit: (state, action) => ({
      ...state,
      editedBookId: action.payload,
    }),
    initBooks: (state, action) => ({
      ...state,
      books: action.payload,
    }),
  },
});

export const { bookAdded, bookDeleted, bookEdited, bookFormOpenedToAdd, bookFormOpenedToEdit, initBooks } =
  booksSlice.actions;
export default booksSlice.reducer;
