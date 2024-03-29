import { useState } from "react";
import Login from "../../pages/Login";
import logo from '../../images/logo.png'
import { Link, NavLink} from 'react-router-dom'; 
import logout from "../../images/logout.png";


const Navbar = ({ currentPage }) => {
    const [nav, setnav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const user = localStorage.getItem('access_token');
    
    if (user == null) {
        return <NavLink to="/" />;
    }

    
    return (
        
        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div class="container flex flex-wrap items-center justify-between mx-auto px-1 lg:px-32 ">
            <Link to="/" class="flex items-center">
                <img src={logo} class="h-6 mr-3 sm:h-9" alt="Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap text-theme-orange">Immob</span>
            </Link>
            <button onClick={() => nav = setnav(!nav) }data-collapse-toggle="navbar-default" type="button" class=" z-50 inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden hover:bg-theme-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class=" w-full md:block md:w-auto" id="navbar-default">
            <ul class={nav ? "flex flex-col  items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white" : "hidden flex-col  items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"}  >
                <li>

                    
                <Link to="/"  class={currentPage === "home" ? "block text-xl py-2 pl-3 pr-4 text-white bg-theme-orange rounded md:bg-transparent md:text-theme-orange md:p-0 dark:text-white":"block text-xl py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-theme-orange md:p-0"} aria-current="page">Home</Link>
                </li>
                <li>
                <Link to="/profile"  class={currentPage === "announces" ? "block text-xl py-2 pl-3 pr-4 text-white bg-theme-orange rounded md:bg-transparent md:text-theme-orange md:p-0 dark:text-white":"block text-xl py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-theme-orange md:p-0"}>Mes Announces</Link>
                </li>
                <li>
                <Link to="/offres"  class={currentPage === "offres" ? "block text-xl py-2 pl-3 pr-4 text-white bg-theme-orange rounded md:bg-transparent md:text-theme-orange md:p-0 dark:text-white":"block text-xl py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-theme-orange md:p-0"}>Mes Offres</Link>
                </li>
                <li>
                <Link to="/addproduct"  class={currentPage === "add" ? "block text-xl py-2 pl-3 pr-4 text-white bg-theme-orange rounded md:bg-transparent md:text-theme-orange md:p-0 dark:text-white":"block text-xl py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-theme-orange md:p-0"}>Add Announce</Link>
                </li>
                    <li>
                    <img
                    onClick={() => {
                      localStorage.clear();
                      window.location.reload(false);
                    }}
                    src={logout}
                    className="w-8 "
                  />
                    
                    </li>

            </ul>
            </div>
        </div>
        </nav>

    );
}

export default Navbar;