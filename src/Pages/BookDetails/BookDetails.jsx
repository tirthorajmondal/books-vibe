import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBooks, saveBooks, saveToWishlist } from '../../utils';


const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);


    const book = books.find(book => book.bookId === idInt);

    // console.log(book);
    const {bookId, image, bookName, author, review, totalPages, publisher, yearOfPublishing, rating, category, tags } = book;

    const handleRead = book => {
        saveBooks(book);
    }

    const handleWishlist = book => {
        saveToWishlist(book);
    }



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 bg-base-100  max-h-[calc(100vh-120px)]">
            <figure className="py-8 bg-ashback flex justify-center  rounded-xl">
                <img
                    src={image || bookImage}
                    width={300}
                    alt={bookName} />
            </figure>
            <div className="max-w-max mx-auto">
                <div className=" p-0">
                    <h2 className="text-4xl font-bold mb-5">{bookName}</h2>
                    <p className='text-xl text-black80'>By: {author}</p>
                    <hr className="border-dashed border-t-2 border-black60 mt-3" />
                    <p className='font-medium text-lg text-black80 my-3'>{category}</p>
                    <hr className="border-dashed border-t-2 border-black60 mb-3" />
                    <p className='text-[#131313B3]'><span className='font-bold text-xl text-black100'>Review: </span> {review}</p>

                    <ul className="font-semiboldbold my-5">
                        <span className='font-bold mr-5'>Tag</span>
                        {
                            tags.map(tag => <span className="mr-3 p-2 px-3 rounded-3xl my-3 bg-ashback text-first font-medium" key={tag}>#{tag}</span>)
                        }
                    </ul>
                    <table className='mb-4'>
                        <thead className=''>
                            <tr>
                                <td className='font-semibold text-black60'>Number of Pages:</td>
                                <td className='font-semibold text-black100m pl-5'>{totalPages}</td>
                            </tr>
                            <tr>
                                <td className='font-semibold text-black60'>Publisher:</td>
                                <td className='font-semibold text-black100m pl-5'>{publisher}</td>
                            </tr>
                            <tr>
                                <td className='font-semibold text-black60'>Year of Publishing:</td>
                                <td className='font-semibold text-black100m pl-5'>{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td className='font-semibold text-black60'>Rating:</td>
                                <td className='font-semibold text-black100m pl-5'>{rating}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="flex gap-3 mb-3 lg:mb-0">
                    <button onClick={() => handleRead(book)} className="btn btn-ghost border border-black60 px-6  rounded-lg">Read</button>
                    <button onClick={() => handleWishlist(book)} className="btn bg-second  px-6 text-white100">Wishlist</button>
                    <ToastContainer
                        autoClose={2000}></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;