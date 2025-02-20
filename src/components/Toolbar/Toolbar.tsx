"use client";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { LocalStorageService } from "@/helpers/LocalStorageService";
import { bookFormOpenedToAdd } from "../Books/booksSlice";
import { Button } from "../Button/Button";
import { popupOpened } from "../Popup/popupSlice";
import S from "./Toolbar.module.css";

export const Toolbar = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.books.books);

  const handleSave = () => {
    LocalStorageService.save("books", books);
  };

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
      <Button color="green" onClick={handleSave}>
        Сохранить
      </Button>
    </div>
  );
};
