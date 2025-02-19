"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import S from "./BookForm.module.css";
import { Button } from "../Button/Button";
import { IBook } from "../Books/Books.data";
import { bookAdded, bookEdited } from "../Books/booksSlice";
import { popupClosed } from "../Popup/popupSlice";

export const BookForm = () => {
  const { books, editedBookId } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  let isBookAdded = true;

  let initialData = {
    author: "",
    genre: "",
    litresURL: "",
    pages: "",
    title: "",
    year: "",
  };

  if (editedBookId !== null) {
    const book = books.find((book: IBook) => book.id === editedBookId);
    if (book) {
      isBookAdded = false;
      initialData = {
        author: book.author,
        genre: book.genre,
        litresURL: book.litresURL,
        pages: book.pages,
        title: book.title,
        year: book.year,
      };
    }
  }

  const [author, setAuthor] = useState(initialData.author);
  const [genre, setGenre] = useState(initialData.genre);
  const [litresURL, setLitresURL] = useState(initialData.litresURL);
  const [pages, setPages] = useState(initialData.pages);
  const [title, setTitle] = useState(initialData.title);
  const [year, setYear] = useState(initialData.year);

  const handleSubmitForm = () => {
    const data = { author, genre, litresURL, pages, title, year };
    if (isBookAdded) {
      dispatch(bookAdded(data));
    } else {
      dispatch(bookEdited({ ...data, id: editedBookId }));
    }
    dispatch(popupClosed());
  };

  return (
    <form className={S.Form} onSubmit={handleSubmitForm}>
      <label>
        Название
        <input onChange={(e) => setTitle(e.target.value)} value={title} />
      </label>
      <label>
        Автор
        <input onChange={(e) => setAuthor(e.target.value)} value={author} />
      </label>
      <label>
        Жанр
        <input onChange={(e) => setGenre(e.target.value)} value={genre} />
      </label>
      <label className={S.LabelHalfWidth}>
        Год
        <input onChange={(e) => setYear(e.target.value)} value={year} />
      </label>
      <label className={S.LabelHalfWidth}>
        Страниц
        <input onChange={(e) => setPages(e.target.value)} value={pages} />
      </label>
      <label>
        Адрес на Litres
        <input onChange={(e) => setLitresURL(e.target.value)} value={litresURL} />
      </label>
      <Button color="green">Сохранить</Button>
    </form>
  );
};
