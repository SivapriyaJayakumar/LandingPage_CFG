import React from 'react';

import './footer.css';
function Footer(props){ 
    return( 
        <footer className='footer'>
        <div className='row_footer'>
            <div className="col">
                <h4 className="title-col">NGO</h4>
                <img className="ngologo" src="./assets/ngobgbanner.jpeg"></img>
                <p className='ngocaption'>CAPTION</p>
            </div>
            <div className="col">
                <h4 className="title-col">Title</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                </ul>
            </div>
            <div className="col">
                <h4  className="title-col">Title</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                </ul>
            </div>
            <div className="col">
                <h4  className="title-col">Title</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                </ul>
            </div>
            
        </div>
        </footer>
    )
}
export default Footer;