import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const closeMenu = () => {
        setOpenMenu(false)
    }

    return(
        <div>
        <hr/>
            <div>
                <div className="sm: hidden">
                    <button className="block text-white p-2 focus:outline-none" onClick={handleOpenMenu}>
                        <span className=""></span>
                    </button>
                </div>
                <nav>
                    <ul>
                        <div>
                            <Link to='/' onClick={closeMenu}>
                                <li>TEST</li>
                            </Link>
                            <Link to='/about' onClick={closeMenu}>
                                <li>ABOUT</li>
                            </Link>
                            <Link to='/shop' onClick={closeMenu}>
                                <li>SHOP</li>
                            </Link>
                        </div>
                        <div>
                            <Link to="https://www.instagram.com/emilievizcano/">
                                <li>INSTAGRAM</li>
                            </Link>
                            <Link to="https://twitter.com/sen_vz">
                                <li>TWITTER</li>
                            </Link>
                            <Link to="https://emilievizcano.com/">
                                <li>WEBSITE</li>
                            </Link>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar