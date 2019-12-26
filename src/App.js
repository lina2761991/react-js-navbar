import React from 'react';
import logo from './logo.svg';
import './App.css';

const  Link = (props) =>
<li className={`nav-item ${props.ac}`} >
    <a href={props.to} className='nav-link'> {props.text}</a>
  
</li>


const SubNav = () =>

  <li className="nav-item dropdown"> 
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">For entrepreneurs</a>
          <a className="dropdown-item" href="#">For students</a>
          <a className="dropdown-item" href="#">for hobbyists</a>
        </div>
     
</li>


function App () {
  return (
   <div className = 'navbar navbar-expand-lg navbar-light bg-light'>
     <ul className="navbar-nav">
        <Link text="Home" to="http://www.google.com" ac="active"></Link>
        <SubNav />
        <Link text="Contact" to="http://www.google.com"  ></Link>
       
  </ul>
</div>
  );
}

export default App;
