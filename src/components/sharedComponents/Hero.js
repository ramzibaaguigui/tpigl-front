import Navbar from "./NavBar";
const heroImageSource = require('./../../public/images/hero_background.png')


const Hero = () => {
    return (
        <div className="relative bg-theme-orange">
            <div className="absolute w-full">
                <img className="w-full object-cover" src={heroImageSource}></img>
            </div>
            

            <div className="absolute w-full ">
                    <Navbar />
            </div>
        

        </div>
    )
}

export default Hero;
