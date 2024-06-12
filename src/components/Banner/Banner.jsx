import { CiBookmark, CiHeart } from 'react-icons/ci';
import bannerImage from '../../assets/img/image 44.png'
import { IoShareOutline } from 'react-icons/io5';

const Banner = () => {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                alt=""
                                src={bannerImage}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <div className='flex justify-between'>
                                <p className="text-red-500 font-bold">Trending</p>
                                <div className='flex'>
                                    <CiHeart />
                                    <CiBookmark />
                                    <IoShareOutline />
                                </div>

                            </div>

                            <h2 className="text-3xl font-semibold sm:text-4xl font-poppins">Cake meme reflects coronavirus absurdity in a world where nothing is what it seems</h2>

                            <p className="mt-4 text-black font-poppins">
                                Earlier this month, a viral video depicting hyper-realistic cakes as everyday items had folks on social media double-guessing every other post, and sometimes even their own realities, effectively launching the next meme : “Is this real or is this cake?”
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;