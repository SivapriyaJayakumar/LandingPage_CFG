import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink , Button, Modal,ModalBody,ModalTitle,ModalFooter,ModalHeader} from 'reactstrap';
function NavBar(props){
    
    const [isOpen, setIsOpen] = React.useState(false);
    const [isModalOpen, setModalOpen] = React.useState(false);
    const toggle = () => {console.log('toggle');setModalOpen(!isModalOpen)}
    
    return(
        <>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Anubhuti</NavbarBrand>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem className="ms-auto">
                        <NavLink   href="#">Login</NavLink>
                    </NavItem>
                    <NavItem className="ms-auto">
                        <NavLink  href="#">Signup</NavLink>
                    </NavItem>
                    <NavItem className="ms-auto">
                        <Button onClick={toggle}>DONATE</Button>
                    </NavItem>
                </Nav>
  
            </Collapse>
        </Navbar>
        <Modal show={isModalOpen} toggle={toggle}>
            <ModalHeader>Title</ModalHeader>
            <ModalBody>Entries</ModalBody>
        </Modal>
        </>
    )
}
export default NavBar;