
import NucampLogo from '../app/assets/img/logo.png';
import {useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import UserLoginForm from '../features/user/UserLoginForm';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return(
    <Navbar light color='primary' sticky='top' expand='md'>
    
         <NavbarBrand className='ms-5' href='/'>
             <h1 className='mt-1'>Jeremy Jeremiah's Portfolio</h1> 
         </NavbarBrand>
         <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
         <Collapse isOpen={menuOpen} navbar>
            
            <Nav className="ms-auto" navbar>
            
                <NavItem>
                    <NavLink className='nav-link' to='/'>
                         Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/education'>
                         Education
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/about'>
                         Skills
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/contact'>
                         Contact
                    </NavLink>
                </NavItem>
                <UserLoginForm />
            </Nav>
        </Collapse>
 </Navbar>)
}

export default Header;