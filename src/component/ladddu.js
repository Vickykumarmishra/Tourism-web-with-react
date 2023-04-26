import React from 'react'
import { motion } from 'framer-motion'

export default function ladddu(props) {
  function billing(){

    let quantity=document.getElementById('bill').value
    let ratelist=document.getElementById('rate').value
    let discoount=document.getElementById('discount').value

    document.getElementById('pari').innerHTML='quantity purchased ='+quantity+'Kg'
    document.getElementById('pari2').innerHTML='Total payable Amount ='+(quantity*ratelist-discoount/100*quantity*ratelist)+'₹ '
  }

  function clear(){
    document.getElementById('pari').innerHTML=' '
    document.getElementById('pari2').innerHTML=' '
    document.getElementById('bill').value=' '
    document.getElementById('rate').value=' '
    document.getElementById('discount').value=' '
  }

  return (
    <div>
       {/**i have used grid here from bootstrap */}
      <div class="container">
  <div class="row">

  <div class="col" style={{marginBottom:"2rem"}}>
    <center>  <motion.h3  animate={{scale:1.2}}  transition={{duration:1,repeat:Infinity}} style={{color:"green"}}><b>Order prasad at your home</b></motion.h3></center>
    <center> <img src="laddu.jpg" className='img-thumbnail' alt="..." /></center>
  
    <center><p style={{color:'red'}}>Laddu,Price:100,12% discount on total amount</p><center/>
    
    <motion.button    animate={{scale:1.2}}  transition={{duration:0.7,repeat:Infinity}} id="buttn" type='submit'className="btn btn-outline-success"
    onClick={
      ()=>{props.addToCartHandler({price:100,name:'Laddu'})}
      }    >

        Add To Cart+  </motion.button>

        <button   style={{marginLeft:'0.5rem'}} id="buttn" type='submit'className="btn btn-success"
    onClick={
      ()=>{props.removeToCartHandler()}
      }    >

        Remove From Cart+  </button>
    </center>
    </div>
    
    <div class="col"  style={{ border:'0.2rem solid green', borderRadius:'1rem' , padding:'2rem' ,color:'green', marginBottom:'2rem'}}>
   <center>  <h3 style={{color:"blue"}}>Billing:</h3><br/>
   
   quantity:<input type='text' placeholder="enter quantity purchased" id='bill'/><br/><br/>
   Todays Rate:<input type='text' id='rate'/><br/><br/>
   Discount%:<input type='text' id='discount' placeholder="Todays discount is 12%" /><br/><br/>
   <center><button onClick={billing} className="btn btn-danger">Submit</button>
   <button className="btn btn-primary" onClick={clear}>clear</button></center>
   <p style={{color:'red'}}>please verify the quantity from cart at top before billing(for small devices click hamburger icon on top to see cart)</p>
   <p id='pari'></p>
   <p id='pari2'></p>

   </center>

      
    </div>

    
    
  </div>
</div>

    </div>
  )
}
