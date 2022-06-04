import './App.css';
import NavBar from './Nav';
import Footer from './footer';
import {Button} from 'reactstrap';
import Programs from './Programs';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <div className='banner'>
    <div className='cname'>A N U B H U T I</div>
    <h3 className="caption">Moving towards a better world !</h3>
    <div className='donate'>
    <Button outline className="btn-d" color="warning">Donate</Button>
    <Button outline className="btn-d" color="warning" >Volunteer</Button>
   
    </div>
    </div>

    <Programs/>
    <Footer/>
  </div>
  );
}

export default App;

