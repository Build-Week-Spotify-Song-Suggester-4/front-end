import React from "react";
import { Container, Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";
import { useHistory } from 'react-router-dom'
function NavBar(){

    //const [state, setter] = useState();
    const history = useHistory()
    
    const logout = e => {
		if(localStorage.getItem("token") || localStorage.getItem('ID')){ 
		localStorage.removeItem('token');
		localStorage.removeItem('ID')
		history.push("/")
		// window.location.reload(true)
		}		
    };
    
    return(
		<Navbar color="dark" className="">
			<Nav style={{width:"100%"}}className="row">
					<NavbarBrand style={{color:"lime"}} >Spotify</NavbarBrand>
					<Container className="themed-container" fluid="lg">
						<NavItem style={{color:"white"}}className="">
							<NavLink  href="/">Log In</NavLink>
						</NavItem>
						<NavItem style={{color:"white"}}className=""> 
							<NavLink  href="/register">Sign Up</NavLink>
						</NavItem>
						<NavItem style={{color:"white"}}className=""> 
							<NavLink href="#" onClick={logout} >Log Out</NavLink>
						</NavItem>
				</Container>	
			</Nav>
		</Navbar>
		
    );
}
export default NavBar;