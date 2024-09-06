import { Link, Outlet } from 'react-router-dom';
import ShortBy from '../../components/ShortBy/ShortBy';
import { useState } from 'react';


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='min-h-screen'>
            <h2 className='font-bold text-2xl bg-ashback rounded-xl text-center py-5'>Books</h2>

            {/* toggle shortby */}
            <ShortBy />
            {/* tabs */}
            <div className="flex items-center overflow-x-auto overflow-y-hidden flex-nowrap mb-5">
                <Link to='' tabIndex={0}
                    onClick={() => setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'}  rounded-t-lg border-gray-400 `}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Read</span>
                </Link>
                <Link to='wishlist'
                    tabIndex={1}
                    onClick={() => setTabIndex(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'}  rounded-t-lg border-gray-400 `}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Wishlist</span>
                </Link>
                <span className=" border-b  flex-grow h-full  px-5 py-6">
                    
                </span>
            </div>
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};

export default ListedBooks;