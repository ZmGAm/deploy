import {React, useEffect,useState,useContext}from 'react';
import { BrowserRouter, NavLink, Route , useNavigate } from 'react-router-dom';
import { LoginContext } from './Context/LoginContext.js';
import './design/nav.css';
import './Rigister.jsx';
{/* <link rel="stylesheet" href="nav.css"></link> */}
function Navbar() {
  const { login,updateLogin}=useContext(LoginContext);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
     
    if(!login.token){
      setIsLoggedIn(false);
    }
    else{
      setIsLoggedIn(true);
    }
  }, [login]);  // Empty dependency array to run only once on mount

const handleLogout = () => {
  updateLogin({})
  localStorage.removeItem('login');
    setIsLoggedIn(false);
    navigate('/login');
  };
  return (  
    <header>
          
          <div class="real">
           
          <div class="logo" style={{display:'flex',alignItems:"center",justifyContent:"center",padding:"0 1% 0 1%",margin:"2px"}}>
                
                <a >Share Your Ride</a>

              

              </div>
                <ul class="menu">
                    <li className='items'>
                      <NavLink className='linkitems' to="/">Home</NavLink>
                    </li>
                    <li>
                              {!isLoggedIn &&(
                        <NavLink className="linkitems" to="/login"> Login </NavLink>
                       
                      )}
                      
                    </li>
                    <li>
                          {isLoggedIn&&(

                                        <NavLink className="linkitems"  onClick={handleLogout}> Logout </NavLink> )
}
                    </li>
                    <li>
                          {(isLoggedIn&& (login.type=="Driver"||login.type=="Owner") ) ?(
                                     <NavLink className="linkitems" to="/Pool_c">CreatPool  </NavLink>
                                               ) :null 
}
                    </li>
                    
                    <li className='items'>
                      <NavLink className='linkitems' to="/about">About</NavLink>
                    </li>
                   
                    <li className='items'>
                      <NavLink className='linkitems'to="/contact">Contact</NavLink>
                    </li>
                    <li>
                          {!isLoggedIn&&(

                              <NavLink className='linkitems'to="/Signup">Signup</NavLink>)
}
                    </li>
                  
                    <li>
                          {isLoggedIn&&(

                      <NavLink className='linkitems'to="/View">view profile</NavLink> )
}
                    </li>
                   
                  </ul>
              </div>
         
</header>

             
  );
}

export default Navbar;