import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Register.css'

export default function Register (props) {

    const navigate = useNavigate();

    function handleChange(e) {
        e.preventDefault();
        const {name,value} = e.target;
        props.funct(name, value);
        
        }

        function handleSubmit (e) {
            e.preventDefault();
            props.user.isRegistered =true;
            console.log(props.user);
            navigate("/login");

        }
    return (
        <div className="Register">
            <span className="Register-title">Register</span>
            <form onSubmit={handleSubmit} className="Register-form">
                <label>Username</label>
                <input name='userName' onChange={handleChange} value={props.user.userName} className='Register-Input' type="text" placeholder='choose a username' autoFocus={true} />
                <label>Email</label>
                <input name='Email' onChange={handleChange} value={props.user.Email} className='Register-Input' type="email" placeholder='something@gmail.com'  />
                <label>password</label>
                <input name='password' onChange={handleChange} value={props.user.password} className='Register-Input' type="password" placeholder='enter your password' />
                <button className="Register-button">Register</button>
            </form>
                <button className="Register-login-button"><Link to="/login">Login</Link></button>
        </div>
    )
}