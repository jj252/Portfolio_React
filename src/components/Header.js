
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
import style from '../app/shared/StudentList.module.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return(
    <Navbar color='info' sticky='top' expand='md'>
    
         <NavbarBrand className='ms-5' href='/'>
             
             <h1 className='mt-1'>JJ's Port</h1> 
         </NavbarBrand>
         <NavbarToggler className={style.NavbarToggler} onClick={() => setMenuOpen(!menuOpen)} />
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