import { Link } from "react-router-dom";

import Logo from '../assets/images/logo-header.png';

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="GCET logo" />

            <nav>
                <ul>
                    <li><Link to='/'>About</Link></li>
                    <li>
                        <Link to='/'>Solutions
                            {/* <!-- arrow-down --> */}
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>Services
                            {/* <!-- arrow-down --> */}
                        </Link>
                    </li>
                    <li><Link to='/'>Blog</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                    <li>
                        <Link to='/'>
                            {/* <!-- Cart --> */}
                        </Link>
                    </li>
                </ul>
            </nav>

            <figure>
                <figcaption>
                    <h1>Grow Your Business</h1>
                    <p>
                        We help businesses build their IT organisation from the
                        heart of growth and innovation to increased all-round
                        efficiency.
                    </p>
                    <Link to='/'>Get Consultancy</Link>
                    <Link to='/'>Quick Call Back</Link>
                </figcaption>
            </figure>
        </header>
    )
}

export default Header