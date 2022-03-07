import React from "react";
import { Navbar, Nav,NavDropdown } from "react-bootstrap";
import { Link,useNavigate} from "react-router-dom";
function Header() {
const navigate = useNavigate();
// const user = JSON.parse(localStorage.getItem("data"))
  function Logout(){
    localStorage.clear()
    navigate("/signup")
  }

  return (
    <Navbar bg="dark" variant="dark">

    <Nav className="me-auto nav_bar_wrapper p-25">
        <Link className="p-3" to="/">
          Home
        </Link>

        <Link className="p-3" to="/services">
          Services
        </Link>
        <Link className="p-3" to="/career">
          Career
        </Link>
        <NavDropdown >
              <NavDropdown.Item
              
                onClick={Logout} >
                Logout </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    <Nav >
       <div className="signupbutton">
       <Link className="p-3" to="/signup">
          Signup
        </Link>
        <Link className="p-3" to="/login">
          Login
        </Link>
       </div>
        
      </Nav>
    
     
</Navbar>)
  
}

export default Header;
