import Banner from "./components/Banner/Banner"
import BreakingNews from "./components/BreakingNews/BreakingNews"
import News from "./components/News/News"
import Slider from "./components/Slider/Slider"


function App() {


  return (
    <>
      <Banner></Banner>
      <BreakingNews></BreakingNews>
      <News></News>
      <h3 className="font-poppins text-lg font-semibold">Editor’s Picks</h3>
      <Slider></Slider>
    </>
  )
}

export default App
