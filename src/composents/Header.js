import { Link } from "react-router-dom"

function Header(){
    return(
        <div>
            <div>
                <h2>EMILIE VIZCANO</h2>
            </div>
            <div>
                <h1>LAPICIDE</h1>
            </div>
            <div>
                <Link to="/shop">
                    <button>BUY THE FONT</button>
                </Link>
            </div>
            <hr/>
        </div>
    )
}

export default Header