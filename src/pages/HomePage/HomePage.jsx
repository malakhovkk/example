import React from "react";
import { BooksList } from "../../components/BooksList/Books.List";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { booksSelector } from "../../redux/books/books.reducer";
import { useSelector } from "react-redux";
import { fetchBooks } from "../../redux/books/books.thunk";

const HomePage= () => {
    const dispatch = useDispatch()
    const {books} = useSelector(booksSelector)

    useEffect(() => {
        console.log(books);
        if(!books.length) {
            dispatch(fetchBooks())
        }
    }, [])

  return (
    <div className="home-page">
        <BooksList />
    </div>
  );
};

export { HomePage };