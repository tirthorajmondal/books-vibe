import { Link } from "react-router-dom";
import bookImage from "../../assets/bookalter.jpeg"
import { FaRegStar } from "react-icons/fa";


const BookCard = ({ book }) => {
    const { bookId, image, bookName, author, review, totalPages, rating, category, tags } = book;


    return (
        <Link to={`book/${bookId}`} className="card bg-base-100 shadow-xl border-2 p-6">
            <figure className="py-8 bg-ashback mb-3 rounded-xl">
                <img
                    src={image || bookImage}
                    width={200}
                    alt={bookName} />
            </figure>
            <ul className="font-semiboldbold mt-6 mb-4">
                {
                    tags.map(tag => <span className="mr-3 p-2 px-3 rounded-3xl my-3 bg-ashback text-first font-medium" key={tag}>{tag}</span>)
                }
            </ul>
            <div className="card-body p-0">
                <h2 className="card-title text-2xl font-bold">
                    {bookName.length > 35 ? bookName.slice(0, 35) + "..." : bookName}
                    </h2>
                <p className="font-medium text-black80">By: {author}</p>
                <hr className="border-dashed border-t-2 border-black60 my-5" />
                <div className="flex justify-between font-medium">
                    <p>{category}</p>
                    <p className="text-right">{rating}   <span className="inline-block ml-px"><FaRegStar
                    size={15}/></span></p>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;