import React from 'react'
import { useSelector } from 'react-redux'
import Logout from './logout'
import watchImage from "../images/watch.jpg"; 
import shampoImage from "../images/shampoo1.png"; 
import perfumeImage from "../images/perfume.jpg"; 
import shoeImage from "../images/shoes.jpg";
import {additemAction,deleteitemAction} from "../components/actions/cart";  
import { useDispatch} from 'react-redux'; 
import "../styles/cart.css";
import EmptycartImage from "../images/emptycart.png";
function Cart() { 
    const cartList=useSelector((state) =>state.cartReducer) 
    const dispatch=useDispatch();
    const handleAdd = (e) =>{ 
        alert(e.target.name + " Added"); 
       dispatch(additemAction(e.target.name+"Count"));
    } 
    const handleRemove = (e) =>{
        alert(e.target.name + " Removed");   
        dispatch(deleteitemAction(e.target.name+"Count"));

    }
  return (
    <div>  
        <Logout/>
        {cartList.cartListcount ?  
        
        <div className='cartlist'> 
        <h3>Cart Items</h3>
            <div> 
                {cartList.shampoCount?  
                <div> 
                <div class="card" style={{width:" 18rem"}}>
                <img src={shampoImage} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Shampoo</h5>
                    <p class="card-text"> {cartList.shampoCount}</p>
                    <button class="btn btn-primary" name="shampo"  onClick={handleAdd}>Add</button> <button class="btn btn-primary" name="shampo" onClick={handleRemove} >Remove</button>
                </div>
            </div> 
                </div>    
                :""}
            </div>    
            <div> 
                {cartList.perfumeCount? 

                         <div> 
                <div class="card" style={{width:" 18rem"}}>
                <img src={perfumeImage} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Perfume</h5>
                    <p class="card-text"> {cartList.perfumeCount}</p>
                    <button class="btn btn-primary" name="perfume" onClick={handleAdd}>Add</button><button class="btn btn-primary" name="perfume" onClick={handleRemove} >Remove</button>
                </div>
            </div> 
                </div>  :""
                }
            </div>    
            <div>  
                {cartList.shoesCount? 
                <div> 
                      <div class="card" style={{width:" 18rem"}}>
                <img src={shoeImage} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Shoes</h5>
                    <p class="card-text"> {cartList.shoesCount}</p>
                    <button class="btn btn-primary" name="shoes" onClick={handleAdd}>Add</button><button class="btn btn-primary" name="shoes" onClick={handleRemove}>Remove</button>
                </div>
            </div> 
                </div>    
                
                :""

                }

            </div>   
            <div>

                {cartList.watchCount? 
                <div> 
                <div class="card" style={{width:" 18rem"}}>
                <img src={watchImage} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Watch</h5>
                    <p class="card-text"> {cartList.watchCount}</p>
                    <button class="btn btn-primary" name="watch" onClick={handleAdd}>Add</button><button class="btn btn-primary" name="watch" onClick={handleRemove}>Remove</button>
                </div>
            </div> 
                </div> 
                :""    
                }
            </div >        
                <div className='placeorder-btn'> 
                    <button className='btn btn-secondary'>Place Order</button>
                </div>    
        </div>    
            : 
            <div>
                <p> <h3> Empty cart </h3>  </p>  
                    <div>  
                        <img src={EmptycartImage} className='emptycart'/>

                    </div>   
            </div>
         }
    </div>
  )
}

export default Cart