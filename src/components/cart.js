import React from 'react'
import { useSelector } from 'react-redux'
import Logout from './logout'
import { additemAction, deleteitemAction, updateitemAction } from "../components/actions/cart";
import { useDispatch } from 'react-redux';
import "../styles/cart.css";
import watchImage from "../images/watch.jpg";
import shampoImage from "../images/shampoo1.png";
import perfumeImage from "../images/perfume.jpg";
import shoeImage from "../images/shoes.jpg";
import EmptycartImage from "../images/emptycart.png";
function Cart() {
    const cartList = useSelector((state) => state.cartReducer)
    // console.log(cartList.itemslist);  
    const resultedList = [];
    if (cartList.itemslist) {
        const cartitems = cartList.itemslist;
        const handleAdd = (e) => {
            const existingData = cartitems.find(item => item.id == e.target.id);
            if (existingData) {

                const filteredItems = cartitems.map(function (item) {
                    const newData = {
                        name: item.name,
                        id: item.id,
                        count: item.count + 1,
                    }
                    console.log(item);
                    if (item.id == e.target.id) {
                        console.log("---------------value to be changed-------", item);

                        return newData
                    }
                    else {
                        return item
                    }
                }
                );

                console.log("----------filteredItems-------------", filteredItems);

                dispatch(updateitemAction(filteredItems));
            }
            // console.log("cart items", cartitems);
        }
        const handleRemove = (e) => {

            const existingData = cartitems.find(item => item.id == e.target.id);
            if (existingData) {

                var filteredItems = cartitems.map(function (item) {
                    const newData = {
                        name: item.name,
                        id: item.id,
                        count: item.count - 1,
                    }
                    console.log(item);
                    if (item.id == e.target.id) {
                        console.log("---------------value to be changed-------", item);
                        if (item.count > 1) {
                            return newData
                        }
                    }
                    else {
                        return item
                    }
                }
                );
                filteredItems = filteredItems.filter(function (element) {
                    return element !== undefined;
                });
                console.log("----------filteredItems-------------", filteredItems);

                dispatch(updateitemAction(filteredItems));
            }

        }
        for (var i = 0; i < cartitems.length; i++) {
            console.log("in cart", cartitems[i]);

            resultedList.push(
                <div class="card" style={{ width: "18rem" }} key={i}>
                    <div class="card-body">
                        <img src={cartitems[i].image} class="card-img-top" alt="..." />
                        <h5 class="card-title">{cartitems[i].name}</h5>
                        <p class="card-text">{cartitems[i].count}</p>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button name={cartitems[i].name} id={cartitems[i].id} class="btn btn-primary" onClick={handleAdd}>add</button> <button class="btn btn-primary" name={cartitems[i].name} id={cartitems[i].id} onClick={handleRemove}>Remove</button>
                    </div>
                </div>
            )
        }
    }
    const dispatch = useDispatch();
    const handleAdd = (e) => {
        alert(e.target.name + " Added");
        dispatch(additemAction(e.target.name + "Count"));
    }
    const handleRemove = (e) => {
        alert(e.target.name + " Removed");
        dispatch(deleteitemAction(e.target.name + "Count"));
    }
    return (
        <div>
            <Logout />
            {resultedList.length ?
                <div>
                    {resultedList}
                    <div>
                        <button className='btn btn-danger'> place order</button>
                    </div>
                </div>
                :
                <div>
                    <h3> Empty cart </h3>
                    <div>
                        <img src={EmptycartImage} className='emptycart' />

                    </div>
                </div>
            }

        </div>
    )
}

export default Cart

