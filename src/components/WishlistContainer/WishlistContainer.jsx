import { useEffect, useState } from "react";
import ReadCard from "../ReadCard/ReadCard";

const WishlistContainer = () => {
    const localBooks = JSON.parse(localStorage.getItem('wishlist'));
    const books = localBooks || []

    // console.log(books);

    // useEffect(() => {
    //     setBooks(localBooks);
    // }, [])

    return (
        <div className="grid gap-5 mb-5">
            {
                books.length > 0 && (books.map(book => <ReadCard key={book.bookId} book={book} />))
            }
        </div>
    );
};

export default WishlistContainer;