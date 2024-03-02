import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { booksSelector } from "../../redux/books/books.reducer";
// import { Loader } from "ui/Loader";
import { addBook } from "../../redux/books/books.reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";



const BooksList= () => {
   const {books} = useSelector(booksSelector)
const [input, setInput] = useState('')
   const dispatch = useDispatch()

   const handleInputChange = (e) => {
    setInput(e.target.value)
   }

   const handleAddBook = () => {
    const book = {
        id: String(Math.random()),
        title: input
    }

    dispatch(addBook(book))
    setInput("");
   }


  return (
    <div className="home-page">
   {
    books.map(book => (<div key={book.id}>
        {book.title}
    </div>))
   }

   <input value={input} onChange={handleInputChange}/>

   <button onClick={handleAddBook}>Добавить книгу</button>
    </div>
  );
};

export { BooksList };