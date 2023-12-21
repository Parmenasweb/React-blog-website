import { Link } from 'react-router-dom';
import './topbar.css';

export default function TopBar(props) {
    return ( 
        <div className="top">
            <div className="topLeft">
                <i className="top-icons fa-brands fa-square-facebook"></i>
                <i className="top-icons fa-brands fa-square-instagram"></i>
                <i className="top-icons fa-brands fa-square-twitter"></i>
                <i className="top-icons fa-brands fa-square-youtube"></i>
            </div>
            {/* ------------------------------------------------------------------------------- */}
            <div className="topCenter">
                <ul className="topList">
                    <li className='topList-items'>
                        <Link className='link' to="/">Home</Link>
                    </li>
                    <li className='topList-items'><Link className='link' to="">About</Link></li>
                    <li className='topList-items'><Link className='link' to="">Contact</Link></li>
                    <li className='topList-items'><Link className='link' to="/write">Write</Link></li>
                    <li onClick={() => props.funct('isLoggedIn', false)} className='topList-items'><Link className='link' to="">{props.user.isLoggedIn&&"Logout"}</Link></li>
                </ul>
            </div>
            {/* --------------------------------------------------------------------------------------- */}
            <div className="topRight">
                {props.user.isLoggedIn ? <img className='top-img' src="https://www.picsum.photos/200" alt="just-something" />:<ul className="topList">
                    <li className='topList-items'><Link className='link signIn-Link' to="/login">Login</Link></li>
                    <li className='topList-items'><Link className='link signIn-Link' to="/register">Register</Link></li>
                    </ul>}
                <i className="top-search-img fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}
