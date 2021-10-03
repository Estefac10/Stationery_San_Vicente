import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../logo/logo.jpg'
import '../styles/Nav.css'

function Nav() {
    return (
    <div className="navbarr">    
     
         <div className="cont-logo"> 
            <Navbar.Brand href="/SistemaGestion">
              <img alt=""src={logo} width="30" height="30" className="d-inline-block align-top"/>{' '}
             Stationary San Vicente
            </Navbar.Brand>
          </div>
         
      </div>       
    )
}

export default Nav
