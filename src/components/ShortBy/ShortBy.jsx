import React, { useState } from 'react';

const ShortBy = () => {

    const [isHide, setIsHide] = useState(true);

    const handleShortBtn = () => {
        setIsHide(!isHide)
    }


    return (
        <div className="grid justify-center my-5">
            <button id="dropdownDefaultButton" onClick={handleShortBtn} data-dropdown-toggle="dropdown" className="text-white100  bg-first hover:bg-[#23BE0AA3] font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center " type="button">Short By<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>

            <div id="dropdown" className={`z-10 ${isHide ? 'hidden' : ''} bg-white100 divide-y divide-gray-100 `}>
                <ul className="py-2 text-sm text-center" aria-labelledby="dropdownDefaultButton">
                    <li className='border-2 border-ashback mb-px rounded-lg'>
                        <a href="#" className="block px-4 py-2 font-semibold ">Rating</a>
                    </li>
                    <li className='border-2 border-ashback mb-px rounded-lg'>
                        <a href="#" className="block px-4 py-2 font-semibold ">Number of Pages</a>
                    </li>
                    <li className='border-2 border-ashback mb-px rounded-lg'>
                        <a href="#" className="block px-4 py-2 font-semibold">Publishing Year</a>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default ShortBy;