import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import menuBackground from './menuBack.svg'; 

export const Nav = styled.nav`
 
  background-image: url(${menuBackground}); // Use the imported SVG as a background image
  background-size: cover;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding-right: 2%;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: x-large;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fff;
    text-underline-position: under;
    text-decoration: underline;
    font-family: fantasy;
    letter-spacing: 1.35px;

  }
  &:hover {
    font-size: 140%;
    letter-spacing: 1.25px;
    font-family: fantasy;
    transition: all 0.6s ease-in-out;
   
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; /* Push content to the far right corner */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 200px; /* Adjust the width to zoom in on the photo */
  margin-left: auto; /* Push the logo to the most right corner */
  /* You can also add other CSS properties if needed */
`;
