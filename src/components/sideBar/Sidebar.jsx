import './sidebar.css';

function SideBar() {
    return ( 
        <div className="sidebar">
            <div className="sidebar-items">
                <span className="sidebarTitle">About Me</span>
                <img className='sideBar-img' src="https://www.picsum.photos/200" alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At necessitatibus 
                    laboriosam corrupti dolores rem! Dolores deleniti vel cupiditate impedit aperiam
                    animi dignissimos
                </p>
            </div>
            {/* --------------------------------------------- */}
            <div className="sidebar-items">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebar-list">
                    <li className="sidebar-lists-items">Life</li>
                    <li className="sidebar-lists-items">music</li>
                    <li className="sidebar-lists-items">style</li>
                    <li className="sidebar-lists-items">sports</li>
                    <li className="sidebar-lists-items">Tech</li>
                    <li className="sidebar-lists-items">Cinema</li>
                </ul>
            </div>
            <div className="sidebar-items">
                <span className="sidebarTitle">Follow Me</span>
                <div className="sidebar-socials">
                    <i className="sidebar-icons fa-brands fa-square-facebook"></i>
                    <i className="sidebar-icons fa-brands fa-square-instagram"></i>
                    <i className="sidebar-icons fa-brands fa-square-twitter"></i>
                    <i className="sidebar-icons fa-brands fa-square-youtube"></i>
                </div>
            </div>
        </div>
    );
}

export default SideBar;