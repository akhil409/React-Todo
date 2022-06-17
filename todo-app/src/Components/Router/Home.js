import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {
  let {push,replace} = useHistory();
   
  return (
    <div className='container'>
       <div className='jumbotron'> 
      <form className='form'>
          <div className='mb-2'>
            <h2 className='text-center'>Login Form</h2>
          </div>
         <hr />
          <div className='row justify-content-center'>
               {/* <h5 className='mt-3'>UserName</h5> */}
              <input type="text"  className='form-control' placeholder='Email address or Phone Number'/>
              {/* <h5 className='mt-3'>Password</h5> */}
              <input type="password"  className='form-control mt-2' placeholder='Password'/>
          </div>
          
          <div className='row justify-content-center'>
             <button className='btn btn-primary mt-3 form-control' onClick={()=> push('/todo')}>Log In</button>
             {/* <Link to='/todo' className='mt-3'></Link> */}
             
             {/* <a href="https://www.facebook.com/" className='mt-4' target="_blank" >Forgotten password?</a> */}
             <button className='mt-3' onClick={()=> push('/password')}>Forgotten password?</button>
             </div>
              <hr/>
              <div className='text-center '>
              
                <button className='btn btn-success' onClick={()=> push('/newform')}>Create New Account</button>
              
              </div>
          
      
     </form>
    </div>
    </div>
  )
}

export default Home;