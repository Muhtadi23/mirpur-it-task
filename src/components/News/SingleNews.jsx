import { CiBookmark, CiHeart } from "react-icons/ci";
import { IoShareOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleNews = ({ article }) => {
    return (
        <Link to={`/newsdetails`} className="block shadow-md font-poppins text-base">
            <img
                alt=""
                src={article.urlToImage}
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
            <div>
                <h3 className="mt-4 text-lg font-bold text-black sm:text-xl">{article.title}</h3>
                <p className="mt-2 max-w-sm text-black">
                    {article.description}
                </p>
            </div>
            <div className='flex justify-evenly gap-4 mt-4'>
                <p>{article.publishedAt}</p>
                <p>{article.author || 'Unknown Author'}</p>
            </div>
            <div className="h-px my-3 flex-1 bg-gray-400"></div>
            <div className="flex justify-evenly pb-3">
                <CiHeart />
                <IoShareOutline />
                <CiBookmark />
            </div>
        </Link>
    );
};

export default SingleNews;
