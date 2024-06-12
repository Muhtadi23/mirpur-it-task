import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleNews from './SingleNews';
import useArticleOne from '../../hooks/useArticleOne';
import useWallStreet from '../../hooks/useWallStreet';
import WallStreet from './WallStreet';
import useUsaHeadline from '../../hooks/useUsaHeadline';
import UsaHeadline from './UsaHeadline';
// import useTesla from '../../hooks/useTesla';
// import TeslaNews from './TeslaNews';
import useApple from '../../hooks/useApple';
import Apple from './Apple';

const News = () => {

    //Top headlines from TechCrunch right now api
    const [allArticle] = useArticleOne()

    // All articles published by the Wall Street Journal in the last 6 months, sorted by recent first
    const [wallJournal] = useWallStreet()

    // Top business headlines in the US right now
    const [usaHeadline] = useUsaHeadline()

    // All articles about Tesla from the last month, sorted by recent first
    // const [tesla] = useTesla()

    // All articles mentioning Apple from yesterday, sorted by popular publishers first
    const [apple] = useApple()


    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6 mt-8 mb-8'>
            <div className='col-span-2'>
                <Tabs>
                    <TabList>
                        <Tab>Tech</Tab>
                        <Tab>Wall Street</Tab>
                        <Tab>Business</Tab>
                        <Tab>Tesla</Tab>
                        <Tab>Apple</Tab>
                    </TabList>

                    {/*---------------------- panel 1------------ */}
                    <TabPanel>

                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-2'>
                            {
                                allArticle.map((article, index) => <SingleNews key={index} article={article}></SingleNews>)
                            }
                        </div>
                    </TabPanel>

                    {/*---------------------- panel 2------------ */}
                    <TabPanel>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-2'>
                            {
                                wallJournal.map((item, index) => <WallStreet key={index} item={item}></WallStreet>)
                            }
                        </div>
                    </TabPanel>

                    {/*---------------------- panel 3------------ */}
                    <TabPanel>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-2'>
                            {
                                usaHeadline.map((item, index) => <UsaHeadline key={index} item={item}></UsaHeadline>)
                            }
                        </div>

                    </TabPanel>
                    {/*---------------------- panel 4------------ */}
                    <TabPanel>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-2'>
                            {/* {
                                tesla.map((item, index) => <TeslaNews item={item} key={index}></TeslaNews>)
                            } */}
                        </div>
                    </TabPanel>
                    {/*---------------------- panel 5------------ */}
                    <TabPanel>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-2'>
                            {
                                apple.map((item, index) => <Apple key={index} item={item}></Apple>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <div>
                <div>
                    <h2 className='text-red-500 text-2xl font-bold'>Live...</h2>
                    <img src="../../../src/assets/img/image 48.png" alt="" />
                    <h1 className='font-bold text-lg'>Beloved Arizona coach loses battle with coronavirus</h1>
                </div>
                <div>
                    <h2 className='text-lg font-poppins font-semibold mt-4'>Location News</h2>
                    <div className='shadow-md p-4'>
                        <p>Get Location specific News</p>
                        <input type="text" placeholder="Type here" className="mt-4 input input-bordered w-full max-w-xs" /> <br />
                        <button className="btn bg-[#C31815] text-white mt-4">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
