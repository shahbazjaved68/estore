import React from 'react'
import './RelatedProduct.css'
import data_product  from '../Assets/data'
import Item from'../Item/Item'
  const RelatedProduct=()=> {
  return (
    <div className='relatedproduct '>
<h1> Related products</h1>
<hr/>

   <div className="continer">
    <div className="relatedproduct_item ms-5 ps-3">
    {data_product.map((item,i)=>{
        return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })}
</div>
    </div>
   </div>
    
  )
}
export default RelatedProduct;