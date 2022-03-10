import React from 'react'
import watchImage from "../images/watch.jpg"; 
import shampoImage from "../images/shampoo1.png"; 
import perfumeImage from "../images/perfume.jpg"; 
import shoeImage from "../images/shoes.jpg";
import Logout from './logout'; 
import {additemAction} from "../components/actions/cart";  
import {useSelector, useDispatch} from 'react-redux'
function Items() {
    const dispatch=useDispatch();
    const handleOnclick = (e) =>{ 
       dispatch(additemAction(e.target.name+"Count"));
    }



  return ( 
      <div>
          <Logout/>
<div className='container'> 
        <div class="row">
           <div className='col col-lg-4'>
                <div class="card" style={{width:" 18rem"}}>
                <img src={shampoImage} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Shampoo</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button class="btn btn-primary" name="shampo" onClick={handleOnclick}>Add to Cart</button>
                </div>
            </div> 
            </div>
           
           <div className='col col-lg-4'> 
           <div class="card"  style={{width:" 18rem"}}>
                <img src={perfumeImage} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Perfume</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button class="btn btn-primary" name="perfume" onClick={handleOnclick}>Add to Cart</button>
                </div>
            </div></div>

            <div className='col col-lg-4'> 
            <div class="card" style={{width:" 18rem"}}>
                <img src={shoeImage} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Shoes</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button class="btn btn-primary" name="shoes" onClick={handleOnclick}>Add to Cart</button>

                </div>
            </div></div>
            <div className='col col-lg-4'>
            <div class="card"  style={{width:" 18rem"}}>
                <img src={watchImage} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Watch</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button class="btn btn-primary" name="watch" onClick={handleOnclick}>Add to Cart</button>

                </div>
            </div>
            </div>
           
            </div>
            
        </div>
      </div>
   
  )
}

export default Items