import React from 'react';
import {useHistory} from 'react-router-dom';

const Password = () => {
  const { push,replace } = useHistory();
  
  return (
    <div className='card' id='password'>
           <div className="card-body">
              <div className="card-title" id='acctitile'><h3>Find Your Account</h3></div> <br />
              <hr />
              <p className='para'>Please enter your email address or mobile number to search for your account.</p>

              <input type="text" className='form-control' placeholder='Email Address or mobile number'/>
              <hr />

              <div className='pbtn'>
              <button className='mr-2 btn btn-danger' onClick={ ()=> push("/")}>Cancel</button>
              <button className='ml-2 btn btn-primary' onClick={ ()=> push("/")}>Search</button>
              </div>
          </div>
     </div>
  )
}

export default Password