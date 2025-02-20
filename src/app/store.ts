import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "@/components/Books/booksSlice";
import popupReducer from "@/components/Popup/popupSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    popup: popupReducer,
  },
});

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
