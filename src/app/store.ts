import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "@/components/Books/booksSlice";
import popupReducer from "@/components/Popup/popupSlice";

export default configureStore({
  reducer: {
    books: booksReducer,
    popup: popupReducer,
  },
});
