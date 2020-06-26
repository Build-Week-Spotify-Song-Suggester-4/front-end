import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";


function NavBar(){
    return(
        <Navbar color="dark" dark>
	        <Nav>
	        	<NavItem>
	                <NavLink href="#">Log In</NavLink>
	            </NavItem>
	            <NavItem>
	                <NavLink href="#"></NavLink>
	            </NavItem>
	        </Nav>
        </Navbar>
    );
}
export default NavBar;