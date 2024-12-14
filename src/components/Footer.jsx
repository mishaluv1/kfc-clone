import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/kfc_PNG7.png'




function Footer() {
    return (
      <>
        <div className='container mt-5 w-100' style={{ height: '200px'  }}>

            <div className="row w-100">
                <div className='col-lg-3'>
                    <h5 ><img className='logo' src={logo} alt="" /></h5>


                </div>
                <div className='col-lg-3 text-center'>
                    
                    <h5 className='mb-3'>Legal</h5>
                    <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Terms and Conditions</Link></div>
                   <div><Link to={'home'} style={{textDecoration:'none',color:'white'}}>Privacy Policy</Link></div>
                   <div><Link to={'history'} style={{textDecoration:'none',color:'white'}}>Disclaimer</Link></div>


                </div>
                <div className='col-lg-3 text-center'>
                    
                    <h5 className='mb-3'>KFC Food</h5>
                    <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Menu</Link></div>
                   <div><Link to={'home'} style={{textDecoration:'none',color:'white'}}>Order Lookup</Link></div>
                   <div><Link to={'history'} style={{textDecoration:'none',color:'white'}}>Gift Card</Link></div>


                </div>
                <div className='col-lg-3 text-center'>
                    
                    <h5 className='mb-3'>Support</h5>
                    <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Get Help</Link></div>
                   <div><Link to={'home'} style={{textDecoration:'none',color:'white'}}>Contact Us</Link></div>
                   <div><Link to={'history'} style={{textDecoration:'none',color:'white'}}>KFC Feedback</Link></div>


                </div>
                
                

            </div>
            </div>

<div>
<p className='text-center mt-4'>Copyright © KFC Corporation 2024 All rights reserved</p>

</div>
</>
        
    )
}

export default Footer