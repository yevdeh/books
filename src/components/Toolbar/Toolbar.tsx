"use client";
import { useDispatch } from "react-redux";
import { bookFormOpenedToAdd } from "../Books/booksSlice";
import { Button } from "../Button/Button";
import { popupOpened } from "../Popup/popupSlice";
import S from "./Toolbar.module.css";

export const Toolbar = () => {
  const dispatch = useDispatch();

  return (
    <div className={S.Toolbar}>
      <Button
        color="green"
        onClick={() => {
          dispatch(bookFormOpenedToAdd());
          dispatch(popupOpened());
        }}
      >
        Добавить книгу
      </Button>
    </div>
  );
};
