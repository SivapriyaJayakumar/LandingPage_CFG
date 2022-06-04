import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: './assets/caratlane.png',
    altText: 'Slide 1',
  },
  {
    src: './assets/bridgestone.png',
    altText: 'Slide 2',
  },
  {
    src: './assets/boss.png',
    altText: 'Slide 3',  
  },
  {
    src: './assets/boss.png',
    altText: 'Slide 3',  
  },
  {
    src: './assets/boss.png',
    altText: 'Slide 3',  
  }
];

const Example = () =>{
  
      return(
     <UncontrolledCarousel autoplay={true} indicators={false} items={items} />
      );
}

export default Example;