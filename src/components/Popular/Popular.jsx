import React from 'react'
import './Popular.css'
import product_1 from '../Assets/product_1.png'
import product_2 from '../Assets/product_2.png'
import product_3 from '../Assets/product_3.png'
import product_4 from '../Assets/product_4.png'
const Popular = () => {
  return (

 
        <div className="container mt-5">
       <div className="row d-flex justify-content-around">
       
       <div class="centered-text">
         <h1>POPULAR IN WOMEN</h1>
          <hr />
      </div>
       
           <div className="col-lg-2 "> 
           <a  target='_blank' href={product_1}>
           <img className='rounded-circle   border' src={product_1} width='250px' />
           </a>
          <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
          <p>$100  <span className='text-decoration-line-through'>$150</span></p>
          </div>
           <div className="col-lg-2 ">
           <a  target='_blank' href={product_2}>
           <img className='rounded-circle   border' src={product_2} width='250px' />
           </a>
          <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
          <p>$100  <span className='text-decoration-line-through'>$150</span></p>
       </div>
          <div className="col-lg-2">
          <a  target='_blank' href={product_3}>
           <img className='rounded-circle   border' src={product_3} width='250px' />
           </a>
           <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
           <p>$100  <span className='text-decoration-line-through'>$150</span></p>
          </div>
          <div className="col-lg-2  ">
          <a  target='_blank' href={product_4}>
           <img className='rounded-circle   border' src={product_4} width='250px' />
           </a>
           <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
           <p>$100  <span className='text-decoration-line-through'>$150</span></p>
           </div>
         </div>
       </div>
    
      
     
 
  )
}

export default Popular