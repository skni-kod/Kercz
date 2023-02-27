import { Outlet} from "react-router-dom";
import Navbar from '../components/navbar'
import '../assets/css/app.css';

import { useCookies } from "react-cookie";
//import NumericInput from 'react-numeric-input';
import React, { useEffect, useState } from "react";

import Footer from '../components/footer'
import ProductInCart from "../components/productInCart";

const SERVER = "http://127.0.0.1:8000";

const Cart = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["cart"]);
    let [itemsData, setItemsData] = useState([]);

    useEffect(()=>{
    let requestBody={"items":[]};
    let cart = cookies["cart"] || [];
    for(let i=0;i<cart["cart"].length;i++){
        requestBody["items"].push({"id":cart["cart"][i]["id"] , "photo":true , "size": false});
    }

    let data = fetch (`${SERVER}/items`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(requestBody)
    })
    .then((response) => response.json())
    .then((data)=>{
        let newItemsData=[];
        for(let i=0;i<data["items"].length;i++){
            let temp={
                "id": data["items"][i]["id"],
                "model": data["items"][i]["model"],
                "price": data["items"][i]["price"],
                "brand": data["items"][i]["mark"],
                "name": data["items"][i]["description"],
                "imageSrc": data["items"][i]["photos"][0]["photo_url"],
                "quantity": cart["cart"][i]["quantity"],
                "size": cart["cart"][i]["size"],
            }
            newItemsData.push(temp);
        }
        setItemsData(newItemsData);
    })
    .catch((err) => console.log(err));
    }, []);

    const getCart = () => {
        let cart = cookies["cart"] || [];
        if (cart.length === 0) {console.log("Cart is empty");}
        else{console.log(cart);}
        return cart;
    }

    const removeItemFromCart = (id, size) => {
        let cart1 = cookies["cart"] || [];
        let cartObj = {cart: []};
        let newItemsData=[];
        console.log("removing");
        console.log(id + " "+size);
        for(let i =0; i<itemsData.length;i++){
            if(itemsData[i].id === id && itemsData[i].size === size){}
            else{
                newItemsData.push(itemsData[i]);
                cartObj.cart.push(cart1[i]);
            }
        }
        try{
            setItemsData(newItemsData);
            setCookie("cart", JSON.stringify(cartObj), { path: "/" });
        }
        catch{}
      };

    const removeCart=()=>{removeCookie("cart",{path:"/"});}

    return (
        <div className="App">
            <Navbar />
            <Outlet />
            <Outlet></Outlet>
            <div className="cartItems">
                {itemsData.map((item,index) => (
                    <div key={index}>
                      <ProductInCart
                        id={item.id}
                        model={item.model}
                        price={item.price}
                        brand={item.brand}
                        name={item.name}
                        imageSrc={item.imageSrc}
                        quantity={item.quantity}
                        size={item.size}
                      />
                      <p>{item.id} {item.size}</p>
                      <button onClick={() => removeItemFromCart(item.id, item.size)}>usun</button>
                    </div>
                ))}
            </div>
            
            <button  onClick={() => {getCart();}}>get cookie</button>
            <button onClick={() => {removeCart();}} > Delete cart cookie </button>

            <button onClick={()=>{ removeItemFromCart(1,20);}}>remove item</button>

            <button onClick={()=>{console.log(itemsData);}}>get data</button>
            <Footer />
        </div>
    );
}

/*
            <NumericInput min={1} value={qty} max={100} onChange={(e) =>{ setQty(e);}} />
            <NumericInput min={20} value={size} max={44} onChange={(e) =>{ setSize(e);}} /> 
*/
export default Cart;