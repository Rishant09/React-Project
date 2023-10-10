import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export  function Login(){

    const [user, setUser] = useState({UserId:'', Password:''});
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleIdChange(e){
        setUser({
            UserId: e.target.value,
            Password: user.Password
        })
    }

    function handlePwdChange(e){
        setUser({
            UserId: user.UserId,
            Password: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        axios({
            method:'get',
            url: 'http://127.0.0.1:5000/users'
        })
        .then(response=>{
            for(var vuser of response.data){
                if(vuser.UserId===user.UserId && vuser.Password===user.Password){
                    navigate("/videos");
                    break;
                } else {
                    setError("Invalid Credentials");
                }
            }
        })
    }

    return(
        <div>
            <h2>User Login</h2>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onChange={handleIdChange} className="form-control"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={handlePwdChange} className="form-control"/></dd>
                </dl>
                <button className="btn btn-primary me-2">Login</button> 
                <Link to="/register">New User? Register</Link>
                <h4 className="text-danger">{error}</h4>
            </form>
        </div>
    )
}