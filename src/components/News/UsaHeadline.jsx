/* eslint-disable react/prop-types */

import { CiBookmark, CiHeart } from "react-icons/ci";
import { IoShareOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const UsaHeadline = ({ item }) => {
    return (
        <div>
            <Link to={`/newsdetails/${item.title}`}className="block shadow-md font-poppins text-base">
                <img
                    alt=""
                    src={item.urlToImage}
                    className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />
                <div>
                    <h3 className="mt-4 text-lg font-bold text-black sm:text-xl">{item.title}</h3>
                    <p className="mt-2 max-w-sm text-black">
                        {item.description}
                    </p>
                </div>
                <div className='flex justify-evenly gap-4 mt-4'>
                    <p>{item.publishedAt}</p>
                    <p>{item.author || 'Unknown Author'}</p>
                </div>
                <div className="h-px my-3 flex-1 bg-gray-400"></div>
                <div className="flex justify-evenly pb-3">
                    <CiHeart />
                    <IoShareOutline />
                    <CiBookmark />
                </div>
            </Link>
        </div>
    );
};

export default UsaHeadline;