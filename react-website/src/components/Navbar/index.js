import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import logo from "./Logo.png"; // import your logo image
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
	const logoStyles = {
		width: "200px", 
		height: "auto", 
		margin: "30px auto 0 20px", 
	  };
	return (
		<>
			<Nav>
			 <Link to="/">
                 <img src={logo} className="img" alt="Logo" style={logoStyles} />
             </Link>
				<NavMenu>
                    <NavLink to="/" activeStyle>
						Home
					</NavLink>
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/blogs" activeStyle>
						Blogs
					</NavLink>
					<NavLink to="/FAQ" activeStyle>
						FAQ
					</NavLink>
					<NavLink to="/Guide" activeStyle>
						Guidelines
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
