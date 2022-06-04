import React from 'react';
import { Card, CardBody } from 'reactstrap';
import './Sponsors.css';
const Sponsors = (props) => {
  return (
    <div className='prgwrap'>
    <h2 className='prghead'>Our Sponsors</h2>
    <div className='programs'>
    
    <Card className='card-sponsors'>
       
        <CardBody className='cardbody-sponsors'>
          
          <img className='sp-logo' alt="sponsors" src='./assets/boss.png'/>
          
        </CardBody>
    </Card>
    <Card className='card-sponsors'>
       
       <CardBody className='cardbody-sponsors'>
         
         <img className='sp-logo'  alt="sponsors" src='./assets/bridgestone.png'/>
         
       </CardBody>
     </Card>
     <Card className='card-sponsors'>
       
       <CardBody className='cardbody-sponsors'>
         
         <img className='sp-logo' alt="sponsors" src='./assets/buyingshow.png'/>
         
       </CardBody>
     </Card>
     <Card className='card-sponsors'>
       
       <CardBody className='cardbody-sponsors'>
         
         <img className='sp-logo' alt="sponsors" src='./assets/caratlane.png'/>
         
       </CardBody>
     </Card>
     <Card className='card-sponsors'>
       
       <CardBody className='cardbody-sponsors'>
         
         <img className='sp-logo' alt="sponsors" src='./assets/cisco.png'/>
         
       </CardBody>
     </Card>
     <Card className='card-sponsors'>
       
       <CardBody className='cardbody-sponsors'>
         
         <img className='sp-logo'  alt="sponsors" src='./assets/forest.png'/>
         
       </CardBody>
     </Card>
    
    </div>
    </div>
  );
};

export default Sponsors;