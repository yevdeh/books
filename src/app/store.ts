import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "@/components/Books/booksSlice";

export default configureStore({
  reducer: {
    books: booksReducer,
  },
});
