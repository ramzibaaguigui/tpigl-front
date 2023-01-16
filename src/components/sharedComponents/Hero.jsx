import Navbar from "./NavBar";
import SearchBar from "../landingComponents/SearchBar";

const heroImageSource = require('./../../public/images/hero_background.png')


const Hero = () => {
    return (
        <div className="bg-theme-orange w-full h-fit">

            <div className="absolute w-full h-full flex flex-col justify-start flex-wrap">
                <div className="w-full h-fit">
                    <Navbar />
                </div>
                <div className="w-full h-5/6 ">
                    <div className='absolute top-1/3 -translate-y-3/4 left-32 flex flex-col p-5 text-4xl font-bold'>
                        <span className='text-theme-white m-1'>The best place</span>
                        <span className='text-theme-white m-1'>to find your</span>
                        <span className='text-theme-orange m-1'>Dream House<span className='text-theme-white'>!</span></span>
                    </div>

                    {/**
                    <div className="absolute bottom-0 min-w-1/2 h-fit w-1/2 left-1/2 -translate-x-1/2">
                        <SearchBar />
                    </div>
     */}
                </div>

            </div>

            <div className="w-full h-full">
                <img className="w-full object-cover" src={heroImageSource}></img>
            </div>



        </div>
    )
}

export default Hero;
