import { useState } from "react";
import Login from "../../pages/Login";
import logo from '../../images/logo.png' 


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log('using merwan navbar')
    return (
        
        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div class="container flex flex-wrap items-center justify-between mx-auto px-1 lg:px-32 ">
            <a href="#" class="flex items-center">
                <img src={logo} class="h-6 mr-3 sm:h-9" alt="Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap ">logo</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden hover:bg-theme-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class=" w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                <li>
                <a href="#" class="block text-xl py-2 pl-3 pr-4 text-white bg-theme-orange rounded md:bg-transparent md:text-theme-orange md:p-0 dark:text-white" aria-current="page">Home</a>
                </li>
                <li>
                <a href="#" class="block text-xl py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-theme-orange md:p-0">About</a>
                </li>
                <li>
                <a href="#" class="block text-xl py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-theme-orange md:p-0">Services</a>
                </li>
                <li>
                <a href="#" class="block text-xl py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-theme-orange md:p-0">Pricing</a>
                </li>
                <li>
                <a href="#" class="block text-xl py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-theme-orange md:p-0">Contact</a>
                </li>
                <li>
                    <button onClick={() => setIsOpen(true)} className="bg-theme-orange text-xl pr-6 pl-6 pt-2
                    hover:cursor-pointer hover:text-theme-orange hover:bg-theme-white hover:border hover:border-theme-orange hover:duration-200 
                    pb-2 rounded-full text-theme-white">Sign in</button>
                    {isOpen && <Login setIsOpen={setIsOpen} />}
                </li>

            </ul>
            </div>
        </div>
        </nav>

    );
}

export default Navbar;