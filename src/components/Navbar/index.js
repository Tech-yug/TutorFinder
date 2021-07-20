import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav,NavbarContainer,NavLogo,MobileIcon, NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink } from './NavbarElement'
import '../Authentication/SignIn/index'


const Navbar = ({toogle}) => {
    return (
        <>
            <Nav>
                 <NavbarContainer>
                   <NavLogo to="/">tutor</NavLogo>
                     <MobileIcon onClick={toogle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="findtutor">Find Tutor</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="howitwork">How It Works</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="becometutor">Become Tutor</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/SignInPage">LogIn</NavBtnLink>
                        <NavBtnLink to='/SignUpPage'>SignUp</NavBtnLink>
                    </NavBtn>
                </NavbarContainer> 
            </Nav>
        </>
    )
};

export default Navbar
