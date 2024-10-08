import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import { useEffect, useState } from "react";

const Books = () => {
    // const books = useLoaderData();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-10">books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-3">
                {
                    books.map(book => <BookCard key={book.bookId} book={book} ></BookCard>)
                }
            </div>

        </div>
    );
};

export default Books;