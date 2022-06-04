import './App.css';
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink , Button, Modal,ModalBody,ModalTitle,ModalFooter,ModalHeader} from 'reactstrap';
function NavBar(props){
    
    const [isOpen, setIsOpen] = React.useState(false);
    
    return(
        <>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/" >Anubhuti</NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem className="ms-auto">
                        <NavLink   href="#">Login</NavLink>
                    </NavItem>
                    <NavItem className="ms-auto">
                        <NavLink  href="#">Signup</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        
        </>
    )
}
export default NavBar;