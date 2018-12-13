import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class navBar extends Component {
  render() {
    return (

      
      <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
      <div className="container">
      <i className="fas fa-film fa-2x" style={{color:'white'}}></i>
        <Link to="/" className ="navbar-brand">
             {' '}   MovieWorld
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-type="#navbarMain">
          <span className="navbar-toggle-icon"></span>
          
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
              HOME
              </Link>
            </li>
            <div class="dropdown">
            <li className="nav-item dropdown">
            <Link to="/" className="nav-link dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              GENERES
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">18+</a>
              <a class="dropdown-item" href="#">3D</a>
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Adventure</a>
              <a class="dropdown-item" href="#">Animation</a>

            </div>
            </li>
            </div>
            
            <li className="nav-item">
              <Link to="/" className="nav-link">
              RELEASE
              </Link>
            </li>
         
          
          </ul>

          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <a href="#!" className= "nav-link">
          UserName
          </a>
          </li>
          <li className="nav-item">
          <Link to="/" className="nav-link">
          <i className="fas fa-cog"></i>
          Settings
          </Link>
          </li>
          <li className="nav-item">
          <a href="#!" className= "nav-link" >
          <i className="fas fa-sign-out-alt"></i>
          LogOut
          </a>
          </li>
          </ul>
          
          </div>
          </div>
      </nav>
      
    )
  }
}


export default navBar;