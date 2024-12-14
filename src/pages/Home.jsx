import React from 'react'
import { Link } from 'react-router-dom'
// import Landingimage from '../assets/Landingimage.gif'
import { Card } from 'react-bootstrap'





function Home() {
  return (
   <>
      {/* landing sction */}
      <div className='container landingsection'>
        <div className='row align-items-center text-center mt-5'>
          <div className='col-lg-5'>
            <h2 className='text-white '>Welcome to <span className='text-black text-center fw-bold'>UV player</span></h2>
            <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit architecto consectetur, enim quo voluptas voluptatem quas amet iure commodi molestiae autem esse corrupti quidem est dolor velit ut officia.z</p>
            <Link to={'/home'} className='btn btn-default btn-center mt-4'style={{backgroundColor:'white', text:'black'}}>get Started</Link>
  
          </div>
          <div className='col'></div>
          <div className='col-lg-6'>
            <img src={mussic} alt="" width={'90%'} height={'90%'} />
          </div>
  
        </div>

        {/* features */}
  
        <div className=' container margin mt-3 mr-4 justify-content-between align-item-center p-5' >
  
          <h2 className='text-center text-white'>Features</h2>
          <div className='row mt-5 margin d-flex justify-content-between '>
            <div className='col-lg-3  '>
  
                  {/* card1 */}
              <Card style={{ width: '18rem', backgroundColor:'white ', color:'black' }} className='p-3 text-center rounded shadow-lg'>
                <Card.Img variant="top" src={manage}/>
                <Card.Body>
                  <Card.Title>Categorize Videos</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
  
            </div>
  
            <div className='col-lg-3'>
  
                  {/* card2 */}
                  <Card style={{ width: '18rem', backgroundColor:'white ', color:'black' }} className='p-3 text-center rounded shadow-lg'>
                  <Card.Img variant="top" src={category}/>
                <Card.Body>
                  <Card.Title>managing History</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
  
            </div>
  
            <div className='col-lg-3 text-center justify-content-center align-items-center'>
  
                  {/* card1 */}
                  <Card style={{ width: '18rem', backgroundColor:'white ', color:'black' }} className='p-3 text-center rounded shadow-lg'>
                  <Card.Img variant="top" src={history}/>
                <Card.Body>
                  <Card.Title>manage Videos</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
  
            </div>

            {/* landing footer */}

            <div className='container my-5 p-5 border border-white border-3 rounded shadow-lg  ' style={{opacity :1}}>
              <div className='row ' >
                <div className="col-lg-6 ">
                  <h4 className='text-black text-center fw-bold mb-4'>Simple,Fast and Powerfull</h4>

                  <div className='mt-2 text-black'>
                  <p className='text-dark'><span className='fs-5 fw-bold text-black '>Play Everything:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, laudantium asperiores nobis non praesentium, necessitatibus in iste sunt neque eligendi sit corporis ipsum vero. Eveniet perspiciatis iusto deleniti quod adipisci</p>
                  </div>

                  <div className='mt-2 text-black'>
                  <p className='text-dark'><span className='fs-5 fw-bold text-black '>Manage Videos:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, laudantium asperiores nobis non praesentium, necessitatibus in iste sunt neque eligendi sit corporis ipsum vero. Eveniet perspiciatis iusto deleniti quod adipisci</p>
                  </div>

                  <div className='mt-2 text-black'>
                    <p className='text-dark'><span className='fs-5 fw-bold text-black '>Watch History:</span >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, laudantium asperiores nobis non praesentium, necessitatibus in iste sunt neque eligendi sit corporis ipsum vero. Eveniet perspiciatis iusto deleniti quod adipisci</p>
                  </div>

                </div>
                <div className="col-lg-6 p-3 mt-2 ">
                <iframe className=' rounded shadow-lg border border-white' width="100%" height="100%" src="https://www.youtube.com/embed/T94PHkuydcw?si=C0fWnSe9Au9-aQu2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

              </div>
              
            </div>

           
        </div>
  
      </div>
  
     </div>
      
   </>

  )
}

export default Home