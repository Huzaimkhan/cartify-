import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/c3b3146e35033a66d563dbce4e53a0b7.png'
import './Navbar.css';
export const Navbar = () => {
  return (
    <>
    
 <nav class="navbar sticky-top navbar-expand-lg shadow p-3   bg-white  rounded " >
  <div class="container-fluid my-2 " >
    <Link class="navbar-brand" ><img  style={{borderRadius : '40px' , marginBottom : '10px'}} src={logo} height={'50px'} width={'50px'}/><span className='logo mx-2' style={{fontSize : '20px'}}>Cartify</span></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class=" navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <Link class="nav-link mx-3 " aria-current="page" to="/">Home</Link>
        </li>
        <hr className='nav-line mx-2 '/>
        <li class="nav-item">
          <Link class="nav-link mx-3" to="/Products">Products</Link>
        </li>
        <hr className='nav-line mx-2 '/>
        <li class="nav-item">
          <Link class="nav-link mx-3 " to="/Uploadform">Upload</Link>
        </li>
        <hr className='nav-line'/>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
