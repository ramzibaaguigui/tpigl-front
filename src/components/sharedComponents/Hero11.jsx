import Navbar from "./NavBar";
const heroImageSource = require('./../../public/images/hero_background.png')


const Hero = () => {
    return (
        <div className="w-full relative">
            <div>
                <Navbar />
            </div>
        </div>
    )
}

export default Hero;
