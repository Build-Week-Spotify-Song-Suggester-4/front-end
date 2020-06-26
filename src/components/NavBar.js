import React, {useState} from "react";
import { Container, Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";
function NavBar(){

	//const [state, setter] = useState();
    return(
		<Navbar color="dark" className="">
			<Nav style={{width:"100%"}}className="row">
					<NavbarBrand style={{color:"lime"}} >Spotify</NavbarBrand>
					<Container className="themed-container" fluid="lg">
						<NavItem style={{color:"white"}}className="">
							<NavLink  href="#">Log In</NavLink>
						</NavItem>
						<NavItem style={{color:"white"}}className=""> 
							<NavLink  href="#">Sign Up</NavLink>
						</NavItem>
						<NavItem style={{color:"white"}}className=""> 
							<NavLink href="#">Log Out</NavLink>
						</NavItem>
				</Container>	
			</Nav>
		</Navbar>
		
    );
}
export default NavBar;