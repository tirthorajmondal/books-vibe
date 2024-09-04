import { Link } from "react-router-dom";
import bannerImage from "../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className="hero py-16 bg-ashback rounded-xl mb-24">
            <div className="flex gap-3 md:gap-5 lg:gap-32 items-center justify-around flex-col p-2 md:flex-row-reverse">
                <img
                    src={bannerImage}
                    width={250}
                    className="rounded-lg shadow-2xl md:max-w-48 lg:max-w-none" />
                <div className="flex flex-col">
                    <h1 className="text-4xl lg:text-5xl max-w-96 md:max-w-md  lg:leading-[3.5rem] font-bold mb-12 lg:text-left">Books to freshen up
                        your bookshelf</h1>

                    <Link to="/listed-books" className="btn max-w-48 border-none bg-first text-white100">View the List</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;