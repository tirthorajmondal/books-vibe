import { FaRegStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ReadCard = ({ book }) => {

    const { bookId, image, bookName, author, review, totalPages, publisher, yearOfPublishing, rating, category, tags } = book;

    return (
        <div className="card gap-16 flex-row bg-base-100 shadow-xl border-ashback border-2 p-6">
            <figure className="p-8 bg-ashback mb-3 rounded-xl">
                <img
                    src={image || bookImage}
                    width={150}
                    alt={bookName} />
            </figure>
            <div className="card-body p-0">
                <h2 className="card-title text-2xl font-bold">
                    {bookName}
                </h2>
                <p className="font-medium text-black80">By: {author}</p>
                <ul className="font-semiboldbold my-2 flex items-center gap-4">
                    <span className="font-bold text-lg mr-4">Tag</span>
                    {
                        tags.map(tag => <span className="mr-3 p-2 px-3 rounded-3xl my-3 bg-ashback text-first font-medium" key={tag}>#{tag}</span>)
                    }
                    <div className="flex gap-2 justify-center items-center font-semibold  text-black80">
                        <span><GrLocation /></span>
                        <span>Year of Publishing: {yearOfPublishing}</span>
                    </div>
                </ul>
                <div className="flex items-center gap-6 text-black60 font-semibold">
                    <div className="flex items-center gap-2">
                        <span><IoMdContacts /></span>
                        <span>Publisher: {publisher}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span><IoNewspaperOutline /></span>
                        <span>Page {totalPages}</span>
                    </div>
                </div>
                <hr className=" border-black60 border-t-2 my-5 mr-3" />
                <div className="flex gap-6 font-medium">
                    <span className="mr-3 p-2 px-3 rounded-3xl my-3 bg-third15 text-third100 font-medium" >Category:{category}</span>
                    <span className="mr-3 p-2 px-3 rounded-3xl my-3 bg-forth15 text-forth100 font-medium" >Category:{rating}</span>
                    <Link to={`/book/${bookId}`} className="mr-3 p-2 px-3 rounded-3xl my-3 bg-first text-white100 font-medium" >View Details</Link>

                </div>
            </div>
        </div>
    );
};

export default ReadCard;