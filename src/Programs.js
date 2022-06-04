import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Programs = (props) => {
  return (
      <div className='prgwrap'>
    <h2 className='prghead'>Our Programs</h2>
    <div className='programs'>
    
    <Card className='card'>
       
        <CardBody className='cardbody1'>
          
          <CardText className='cardtext'>BUDDHISM TO AMBEDKARISM</CardText>
          
        </CardBody>
      </Card>
      <Card className='card'>
        
        <CardBody className='cardbody2'>
            <CardText className='cardtext'>BUDDHISM TO AMBEDKARISM</CardText>
        </CardBody>
      </Card>
      <Card className='card'>
      <CardBody className='cardbody3'>
        <CardText className='cardtext'>BUDDHISM TO AMBEDKARISM</CardText>
    </CardBody>
      </Card>
    </div>
    </div>
  );
};

export default Programs;