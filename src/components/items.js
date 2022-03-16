import React from 'react'
import watchImage from "../images/watch.jpg";
import shampoImage from "../images/shampoo1.png";
import perfumeImage from "../images/perfume.jpg";
import shoeImage from "../images/shoes.jpg";
import Logout from './logout';
import { additemAction, totoalcartAction } from "../components/actions/cart";
import { useSelector, useDispatch } from 'react-redux'

function Items() {
    const dispatch = useDispatch();
    const cartReducer = useSelector((state) => state.cartReducer);
    const cartItems = cartReducer.itemslist;
    var totoalCount = cartReducer.cartListcount;
    const HandleOnclick = (e) => {
        totoalCount += 1;
        console.log("---------e.target-----", e.target.value);
        // dispatch(additemAction(e.target.name + "Count")); 
        const existingData = cartItems.find(item => item.id === e.target.id);

        if (existingData) {
            existingData.count += 1;
            dispatch(totoalcartAction(1));
            console.log("-------existingData-----", existingData);
            console.log("------cartItems-----------", cartItems);
        }
        else {

            const data = {
                name: e.target.name,
                id: e.target.id,
                count: 1,
                image: e.target.value,
                // totalCount: totoalCount,

            }
            dispatch(additemAction(data));
        }

    }



    return (
        <div>
            <Logout />
            <div className='container'>
                <div class="row">
                    <div className='col col-lg-4'>
                        <div class="card" style={{ width: " 18rem" }}>
                            <img src={shampoImage} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Shampoo</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button class="btn btn-primary" name="shampo" id='1' value={shampoImage} onClick={HandleOnclick}>Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className='col col-lg-4'>
                        <div class="card" style={{ width: " 18rem" }}>
                            <img src={perfumeImage} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Perfume</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button class="btn btn-primary" name="perfume" id='2' value={perfumeImage} onClick={HandleOnclick}>Add to Cart</button>
                            </div>
                        </div></div>

                    <div className='col col-lg-4'>
                        <div class="card" style={{ width: " 18rem" }}>
                            <img src={shoeImage} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Shoes</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button class="btn btn-primary" name="shoes" id='3' value={shoeImage} onClick={HandleOnclick}>Add to Cart</button>

                            </div>
                        </div></div>
                    <div className='col col-lg-4'>
                        <div class="card" style={{ width: " 18rem" }}>
                            <img src={watchImage} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Watch</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button class="btn btn-primary" name="watch" id='4' value={watchImage} onClick={HandleOnclick}>Add to Cart</button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Items