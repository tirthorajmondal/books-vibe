import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up 
                    your bookshelf</h1>
                    
                    <Link to="/listed-books" className="btn btn-primary">View the List</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;