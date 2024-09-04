import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="h-14">
                <Navbar />
            </div>
           <div className="mt-14 mx-3 lg:mx-auto max-w-6xl lg:px-2">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayout;