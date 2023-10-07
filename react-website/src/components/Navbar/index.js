import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import logo from "./Logo.png"; // import your logo image

const Navbar = () => {
	return (
		<>
			<Nav>
			<img src={logo} alt="Logo" /> {/* add your logo image */}
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
