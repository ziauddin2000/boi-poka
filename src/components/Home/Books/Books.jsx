import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch("./booksData.json")
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    
    return (
        <div className="py-8"> 

          <h2 className="text-center text-3xl font-bold mb-10">All Books</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5"> 
             {
                books.map((book) => <Book key={book.bookId} book = {book}></Book>)
             }
          </div>

        </div>
    );
};

export default Books;