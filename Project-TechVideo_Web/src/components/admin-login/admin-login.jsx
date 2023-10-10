import {useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

export function AdminLogin(){

    const [user, setUser] = useState({UserId:'', Password:''});
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [setCookie] = useCookies(['user-id']);

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
            url: 'http://127.0.0.1:5000/admin'
        })
        .then(response=>{
            for(var vuser of response.data){
                if(vuser.UserId===user.UserId && vuser.Password===user.Password){
                    setCookie("user-id", user.UserId);
                    navigate("/admin-home");
                    break;
                } else {
                    setError("Invalid Credentials");
                }
            }
        })
    }
    return(
        <div>
        <h3> <span className="bi bi-person-fill"></span> Admin Login</h3>
        <form onSubmit={handleSubmit}>
            <dl>
                <dt>Admin Id</dt>
                <dd><input type="text" onChange={handleIdChange} className="form-control"/></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={handlePwdChange} className="form-control"/></dd>
            </dl>
            <button className="btn btn-primary">Login</button>
            <h3 className="text-danger">{error}</h3>
        </form>
    </div>

    )
}