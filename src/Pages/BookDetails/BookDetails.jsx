import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBooks, saveBooks } from '../../utils';


const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);


    const book = books.find(book => book.bookId === idInt);

    // console.log(book);
    const { image, bookName, author, review, totalPages, rating, category, tags } = book;

    const handleRead = book => {
        saveBooks(book);
        
        toast.success('Successfully added to Read');
    }

    const handleWishlist = book => {
        // console.log(book);
        toast.success('Successfully added to Wishlist')
    }



    return (
        <div className="flex bg-base-100 shadow-xl border-2 p-8">
            <figure className="py-8 bg-slate-100 mb-3 rounded-xl">
                <img
                    src={image || bookImage}

                    alt={bookName} />
            </figure>
            <div className="">
                <ul className="font-semiboldbold">
                    {
                        tags.map(tag => <span className="mr-3 p-2 px-3 bg-slate-200 rounded-3xl my-3" key={tag}>{tag}</span>)
                    }
                </ul>
                <div className="card-body p-0">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <hr className="border-dashed border-4 border-y-2 border-spacing-x-6 border-black" />
                    <div className="flex justify-between">
                        <p>{category}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button onClick={() => handleRead(book)} className="btn btn-primary">Read</button>
                    <button onClick={() => handleWishlist(book)} className="btn btn-secondary">Wishlist</button>
                    <ToastContainer
                    autoClose={2000}></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;