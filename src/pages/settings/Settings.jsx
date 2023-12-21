import './settings.css';
import SideBar from '../../components/sideBar/Sidebar';

function Settings () {
    return (
        <div className="settings">
            <div className="settingswrapper">
                <div className="settingsTitle">
                    <span className="settings-update-title">Update your account</span>
                    <span className="settings-Delete-title">Delete account</span>
                </div>
                <form action="" className="settings-Form">
                    <label>Profile picture</label>
                    <div className="settings-profile-picture">
                        <img src="https://www.picsum.com/200" alt="profile-pic" />
                        <label htmlFor="fileInput">
                        <i className="settings-profile-icon fa-solid fa-user"></i>
                        </label>
                        <input type="file"  id="fileInput" style={{display: 'none'}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='your username' />
                    <label>Email</label>
                    <input type="text" placeholder='something@gmail.com' />
                    <label>password</label>
                    <input type="password" placeholder='Enter your password' />
                    <button className="settings-button">Update</button>
                </form>
            </div>
            <SideBar /> 
        </div>
    )
};

export default Settings;