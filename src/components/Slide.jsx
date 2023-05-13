import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export function Slide(){
   const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
    return(
        <div  id="service" className="slide">
          <div className='hours'>
              <h1>Service</h1>
              <h3>Opening Hours</h3>

           <div className="opening">
              <div >
                      <p>Monday to Tuesday</p>
                      <h3>09:00 am - 22:00 pm</h3>
                  </div>

                  <div>
                  <p>Friday to Sunday</p>
                      <h3>11:00 am - 22:00 pm</h3>
                  </div>
          </div>

            
            </div>   

            <div className='slide-carousel'>
            <Carousel responsive={responsive} infinite = {true} autoPlaySpeed={1000}>
            <div>
                <img src="./SERVICE.jpg" alt="" />
            </div>
            <div>  <img src="./table.jpg" alt="" /></div>
            <div>  <img src="./champagne.jpg" alt="" /></div>
          </Carousel>
         
            </div>
            
       
   
                      
        </div>
    )
}