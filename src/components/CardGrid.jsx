import React from 'react';
import './CardGrid.css'; // Import the CSS for styling
import image1 from '../assets/CAT158.jpg'
import image2 from '../assets/CAT228.jpg'
import image3 from '../assets/CAT287.jpg'
import image4 from '../assets/CAT289.jpg'
import image5 from '../assets/CAT86.jpg'
import image6 from '../assets/CAT99.jpg'
import image7 from '../assets/CAT213.jpg'





const CardGrid = () => {
  return (
    <>
     <div className='p-3'>
      <h5 className='fw-5 fs-30 justify-content-center text-center'>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN<button className='rounded bg-danger m-2 '>Start Order</button>
      </h5>

    </div>
    <div className='bg-white'>
      <div className='p-5 '>
      <h5 className='text-black fs-5'>BROWSE CATEGORIES <hr /></h5>

      </div>

    </div>
    
    <div className="card-container bg-white">
      <div className="card bg-white"><img className='rounded' src={image1} alt=""/> <br /><h6 className='text-black fw-bold'>INTERNATIONAL BURGER FEST</h6></div>
      <div className="card bg-white"><img className='rounded' src={image2} alt=""/> <br /><h6 className='text-black fw-bold'>MATCH DAY COMBOS</h6></div>
      <div className="card bg-white"><img className='rounded' src={image3} alt=""/> <br /><h6 className='text-black fw-bold'>VALUE LUNCH SPECIALS
      </h6></div>
      <div className="card bg-white"><img className='rounded' src={image4} alt=""/> <br /><h6 className='text-black fw-bold'>BOX MEALS
      </h6></div>
    </div>
    <div className="card-container bg-white">
      <div className="card bg-white"><img className='rounded' src={image6} alt=""/> <br /><h6 className='text-black fw-bold'>BURGERS</h6></div>
      <div className="card bg-white"><img className='rounded' src={image5} alt=""/> <br /><h6 className='text-black fw-bold'>CHICKEN BUCKETS
      </h6></div>
      <div className="card bg-white"><img className='rounded' src={image7} alt=""/> <br /><h6 className='text-black fw-bold'>RICE BOWLZ
      </h6></div>
      <div className="card bg-white"><img className='rounded' src={image5} alt=""/> <br /><h6 className='text-black fw-bold'>View All Menu<i class="fa-solid fa-right-long"></i>

      </h6></div>
    </div>
    
    </>

  );
};

export default CardGrid;
