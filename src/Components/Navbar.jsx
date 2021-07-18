import {React, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import './Navbar.css';

import {Navbar, Nav, NavDropdown} from 'react-bootstrap';


function Navbarr() {

    // const [expanded, setExpanded] = useState(false);
    return (
        <>
           {/* <nav className="navbar navbar-expand-lg navbar-light bg-light " 
           expanded={expanded}
            style={{paddingLeft:'50px',paddingRight:'50px'}}>
                <div className="container-fluid ">
                    <NavLink className="navbar-brand" to="/">
                        <span>
                            Cloudkart
                        </span>
                    </NavLink>

                    <button className="navbar-toggler" 
                    onClick = {()=>setExpanded(true)}
                     type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0 page-navlink">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/' onClick={() => setExpanded(false)}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/service' onClick={() => setExpanded(false)}>Service</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link"  onClick={() => setExpanded(false)} to='/about'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/contact' onClick={() => setExpanded(false)}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav> */}


<Navbar bg="light" expand ='lg'>
  <Navbar.Brand href="#home">Cloudkart</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav"  style = {{marginRight: '10px'}}/>
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="ml-auto m-3">
        <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
        </LinkContainer>
      <LinkContainer to= '/service'>
        <Nav.Link>Services</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/service">
      <Nav.Link >About</Nav.Link>
      </LinkContainer>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>

        </>
    )
}

export default Navbarr
