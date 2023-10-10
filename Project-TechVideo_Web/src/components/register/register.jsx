
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export function Register(){

    const navigate = useNavigate();
    const [userError, setUserError] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [user, setUser] = useState({UserId:'', UserName:'', Password:'', Email:'', Mobile:''});

    function handleIdChange(e){
        setUser({
            UserId: e.target.value, 
            UserName: user.UserName,
            Password: user.Password,
            Email: user.Email,
            Mobile: user.Mobile
        })
        axios({
            method:'get',
            url: 'http://127.0.0.1:5000/users'
        })
        .then((response)=>{
            for(var user of response.data){
                 if(user.UserId===e.target.value){
                    setUserError('User Id Taken - Try Another');
                    setErrorClass('text-danger');
                    break;
                 } else {
                    setUserError('User Id Available');
                    setErrorClass('text-success');
                 }
            }
        })
    }

    function handleNameChange(e){
        setUser({
            UserId: user.UserId, 
            UserName: e.target.value,
            Password: user.Password,
            Email: user.Email,
            Mobile: user.Mobile
        })
    }

    function handlePasswordChange(e){
        setUser({
            UserId: user.UserId, 
            UserName: user.UserName,
            Password: e.target.value,
            Email: user.Email,
            Mobile: user.Mobile
        })
    }

    function handleEmailChange(e){
        setUser({
            UserId: user.UserId, 
            UserName: user.UserName,
            Password: user.Password,
            Email: e.target.value,
            Mobile: user.Mobile
        })
    }

    function handleMobileChange(e){
        setUser({
            UserId: user.UserId, 
            UserName: user.UserName,
            Password: user.Password,
            Email: user.Email,
            Mobile: e.target.value
        })
    }

    function handleSubmit(){
        axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/registeruser',
            data: user
        })
        alert('Registered Successfully');
        navigate('/login');
    }

    return(
        <div>
            <h2> <span className="bi bi-person-fill"></span> Register User</h2>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input onChange={handleIdChange} type="text"/></dd>
                    <dd className={errorClass}>{userError}</dd>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={handleNameChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={handlePasswordChange}/></dd>
                    <dt>Email</dt>
                    <dd><input type="email" onChange={handleEmailChange}/></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={handleMobileChange} /></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
                <p>Existing User? <Link to="/login">Login</Link> </p>
            </form>
        </div>
    )
}