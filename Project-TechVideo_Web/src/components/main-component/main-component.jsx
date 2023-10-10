import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function MainComponent(){
    //const [users, setUsers] = useState([]);
    const [userEmail, setUserEmail] = useState('');

    const navigate = useNavigate();

    function handleEmailChange(e) {
        setUserEmail(e.target.value);
    }

    function handleGetStartedClick(){
        axios({
            method: 'get',
            url: 'http://127.0.0.1:5000/users'
        })
        .then((response)=>{
            for(var user of response.data){
                if(user.Email===userEmail) {
                    navigate('/login');
                    break;
                } else {
                    navigate('/unregister');
                }
            }
        })
    }

    return(
        <main>
        <h1>Learn and Design</h1>
        <p>Watch Videos, Learn Technology</p>
        <div>
           <div className='input-group'>
             <input type='email' placeholder='Your email address' onChange={handleEmailChange} className="form-control" /> <button onClick={handleGetStartedClick} className='btn btn-danger'> Get Started <span className='bi bi-chevron-right'></span> </button>
           </div>
        </div>
       </main>
    )
}