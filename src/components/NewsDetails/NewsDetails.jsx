import { useParams } from "react-router-dom";
import recom from '../../../src/assets/img/image 49.png'
import based from '../../../src/assets/img/image 62.png'

const NewsDetails = () => {
    const { title, urlToImage, description, publishedAt, author } = useParams()
    return (
        <div className="w-full font-poppins mx-auto">
            <div className="bg-[#0E1E32] p-8">
                <h2 className="text-5xl text-white">{title}</h2>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-1">
                <div className="col-span-3">
                    <img src={urlToImage} alt="" />
                    <div className='flex justify-evenly text-black gap-4 mt-4'>
                        <p>{publishedAt}</p>
                        <p>{author}</p>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>

                <div>
                    <div className="mt-6">
                        <h2 className='text-black text-2xl font-bold'>Recommended for you</h2>
                        <img src={recom} alt="" />
                        <h1 className='font-bold text-black text-lg'>Millions rely on emergency pandemic benefits for rent, food, and medicine. Now, that lifeline could disappear.</h1>
                    </div>
                    <div className="mt-6">
                        <h2 className='text-black text-2xl font-bold'>Based on Like</h2>
                        <img src={based} alt="" />
                        <h1 className='font-bold text-black text-lg'>The ADA is turning 30. It's time that it included digital accessibility.</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsDetails;