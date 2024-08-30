import { Link } from "react-router-dom";
import bookImage from "../../assets/bookalter.jpeg"

const BookCard = ({ book }) => {
    const { bookId, image, bookName, author, review, totalPages, rating, category, tags } = book;


    return (
        <Link to={`book/${bookId}`} className="card bg-base-100 shadow-xl border-2 p-8">
            <figure className="py-8 bg-slate-100 mb-3 rounded-xl">
                <img
                    src={image || bookImage}
                    width={200}
                    alt={bookName} />
            </figure>
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
        </Link>
    );
};

export default BookCard;