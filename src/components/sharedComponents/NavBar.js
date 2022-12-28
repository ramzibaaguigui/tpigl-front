import { useState } from "react";
import Login from "../../pages/Login";
const logoImageSource = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
const logoAlt = "Logo";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-row h-full min-h-fit justify-around align-middle">
            <img src={logoImageSource} alt={logoAlt} className='self-center w-20' />
            <div className="flex flex-row">
            <ul className="flex flex-row w-fit h-full self-center items-center">
                <li className={`navbar-list-item`}>Home</li>
                <li className={`navbar-list-item`}>Booking</li>
                <li className={`navbar-list-item`}>Contact</li>
                <li className={`navbar-list-item`}>Agence</li>
                <li className={`navbar-list-item`}>Avis</li>
            </ul>

            <button onClick={() => setIsOpen(true)} className="bg-theme-orange pr-6 pl-6 pt-2
            hover:cursor-pointer hover:text-theme-orange hover:bg-theme-white hover:duration-200 
            pb-2 mt-3 mb-3 ml-10 mr-10 rounded-full text-theme-white">Sign in</button>
            {isOpen && <Login setIsOpen={setIsOpen} />}
            
            </div>
        </div>
    );
}

export default Navbar;