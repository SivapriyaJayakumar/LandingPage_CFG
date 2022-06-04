import './App.css';
import React,{useState} from 'react';
import NavBar from './Nav';
import Footer from './footer';
import {Button} from 'reactstrap';
import Programs from './Programs';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink , Modal,ModalBody,ModalTitle,ModalFooter,ModalHeader} from 'reactstrap';
import Sponsors from './Sponsors'
import MyGallery from './imageCarousel';
import IG from './ImageGallery';
function App() {
  const [isOpen, setIsOpen] = React.useState(false);
    
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [form, setForm] = useState({ name: '', amount: '' })
  const toggle = () => { setModalOpen(!isModalOpen) }
  const handleFormChange = (e) => {
      let formData = { ...form };
      formData[e.target.name] = e.target.value;
      setForm(formData);
  }
  const submit = (e) => {
      e.preventDefault();
      toggle();
  }
  return (
    <div className="App">
    <NavBar/>
    <div className='banner'>
    <div className='cname'>A N U B H U T I</div>
    <h3 className="caption">Moving towards a better world !</h3>
    <div className='donate'>
    <Button outline className="btn-d" onClick={toggle}color="black">Donate</Button>
    <Button outline className="btn-d" color="black" >Volunteer</Button>
   
    </div>
    </div>
    <Modal isOpen={isModalOpen} toggle={toggle}>
      <div className='m-3'>
        <ModalHeader toggle={toggle} className="">Donate</ModalHeader>
          <ModalBody className=''>
            <div className='d-flex flex-column my-2'>
              <label htmlFor="name">Name</label>
              <input onChange={handleFormChange} value={form.name} className='appearance-none border border-1 w-100 px-2 py-1' name='name' id='name' />
            </div>
            <div className='d-flex flex-column my-2'>
              <label htmlFor="amount">Amount</label>
              <input type='number' onChange={handleFormChange} value={form.amount} className='appearance-none border border-1 w-100 px-2 py-1' name='amount' id='amount' />
            </div>
            <button type='submit' onClick={submit} className='btn btn-primary text-white mx-auto d-block mt-3'>Submit</button>
          </ModalBody>
      </div>
    </Modal>
    <Programs/>
    <Sponsors/>
    <div className='gallery'>
      <IG/>
    </div>
    <Footer/>
  </div>
  );
}

export default App;

