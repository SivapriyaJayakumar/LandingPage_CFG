import React from 'react';

import './footer.css';
function Footer(props) {
    return (
        <footer className='footer bg-dark text-white p-3'>
            <div className='row row-cols-1 row-cols-sm-3 px-4 pb-4'>
                <div className='col pt-4'>
                    <div className='d-flex flex-column align-items-center'>
                        <h4 className=''>ANUBUTHI</h4>
                        <img src='https://res.cloudinary.com/ideation/image/upload/w_210,h_111,c_fit,q_100,f_auto,dpr_auto/lrwnrmlnj0dart0slf7h' alt='ANUBUTHI' />
                    </div>
                </div>
                <div className='col pt-4'>
                    <div className='d-flex flex-column align-items-center'>
                        <h4>CONTACT</h4>
                        <p className='mt-3 m-0 text-danger'>anubuthi@gmail.com</p>
                        <p className='m-0'>+919876543210</p>
                        <div className='d-flex mt-3 justify-content-around w-50'>
                            <div className='iconContainer'>
                                <i class="fa-brands fa-google"></i>
                            </div>
                            <div className='iconContainer'>
                                <i class="fa-brands fa-facebook-f"></i>
                            </div>
                            <div className='iconContainer'>
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col pt-4'>
                    <div className='d-flex flex-column align-items-center'>
                        <h4>ABOUT US</h4>
                        <p className='about'>Anubhuti is trying to create an educational environment for under-privileged children by becoming the bridge between
                            schools and the community.</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}
export default Footer;