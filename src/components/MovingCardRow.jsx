import React, { useState } from 'react';
import './MovingCardRow.css'; // Import the CSS for styling
import image1 from '../assets/ADDCHK99.jpg'
import image2 from '../assets/BIGSAVE.jpg'
import image3 from '../assets/CHKZINGER.jpg'
import image4 from '../assets/FREEROLL.jpg'
import image5 from '../assets/VEGZINGER.jpg'



const MovingCardRow = () => {
  // Define state for the index of the current card displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of card content, which can contain more complex structures
  const cards = [
    {
      title: '2 PACK HOT CRIPSY',
      image: image1,
      description: ''
    },
    {
      title: 'Card 2',
      image: image2,
      description: 'This is the second card. It also contains an image and description.'
    },
    {
      title: 'Card 3',
      image: image3,
      description: 'This is the third card. You can add more content here.'
    },
    {
      title: 'Card 4',
      image: image4,
      description: 'This is the fourth card. Feel free to add any content you like.'
    },
    
  ];

  // Function to handle moving left
  const moveLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  // Function to handle moving right
  const moveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <div className=''>
      <h3 className='fw-bold pt-5 mt-5 ms-5'>EXCLUSIVE OFFERS FOR YOU</h3>
    </div>
    <div className="moving-card-container"style={{height:'550px'}}>
      
      <button onClick={moveLeft} className="move-button"><i class="fa-solid fa-arrow-left"></i></button>

      <div className="card-row w-100">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`custom-card ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={card.image} alt={card.title} className="card-image" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <button onClick={moveRight} className="move-button"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
    </>

  );
};

export default MovingCardRow;
