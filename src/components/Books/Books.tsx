"use client";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { bookDeleted } from "./booksSlice";
import { popupOpened } from "../Popup/popupSlice";
import { IBook } from "./Books.data";
import S from "./Books.module.css";

export const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  return (
    <table className={S.Table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Год</th>
          <th>Жанр</th>
          <th>Автор</th>
          <th>Страниц</th>
          <th>Ссылка на Litres</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {books.map((book: IBook) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.year}</td>
            <td>{book.genre}</td>
            <td>{book.author}</td>
            <td>{book.pages}</td>
            <td>
              <a href={book.litresURL} rel="noreferrer noopener" target="_blank">
                Ссылка
              </a>
            </td>
            <td>
              <Button color="yellow" onClick={() => dispatch(popupOpened())}>
                Изменить
              </Button>
            </td>
            <td>
              <Button color="red" onClick={() => dispatch(bookDeleted(book.id))}>
                Удалить
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
