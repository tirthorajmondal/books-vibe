import Banner from "../../components/Banner/Banner";
import Books from "../../components/Books/Books";

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="">
                <Books></Books>
            </div>
        </div>
    );
};

export default Home;