import './header.css';

function Header () {
    return(
        <div className="header">
            <div className="headerTitle">
                <span className="header-title-sm">React & Node</span>
                <span className="header-title-lg">Blog</span>
            </div>
            <img src="https://www.picsum.photos/200" alt="another-one" className="header-img" />
        </div>
    )
};

export default Header;