import { useNavigate } from "react-router-dom";

import { Link, redirect } from 'react-router-dom';
import './login.css';

export default function Login (props) {

    const navigate = useNavigate();

    function handleChange (e) {
        const {name, value} = e.target;
        props.funct(name,value);
        e.preventDefault();
        // console.log(props.user)
    }

    function handleSubmit (e) {
        props.funct('isLoggedIn', true);
        console.log(e)
        e.preventDefault();
        navigate('/')
    }
    return (
        <div className="login">
            <span className="login-title">Login</span>
            <form onSubmit={handleSubmit} className="login-form">
                <label>Email</label>
                <input name='Email' value={props.user.Email} className='login-Input' onChange={handleChange} type="email" placeholder='something@gmail.com' autoFocus={true}  />
                <label>password</label>
                <input name='password' value={props.user.password} className='login-Input' onChange={handleChange} type="password" placeholder='enter your password'  />
                <button className="Login-button">Login</button>
            </form>
                <button className="Login-register-button"><Link to="/register">Register</Link></button>
        </div>
    )
}