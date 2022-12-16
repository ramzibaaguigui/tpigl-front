
import { useState } from "react";
import Login from "../../pages/Login";




const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button  onClick={() => setIsOpen(true)}>
        Open Login
      </button>
      {isOpen && <Login setIsOpen={setIsOpen} />}
    </main>
  )
}

export default Navbar;