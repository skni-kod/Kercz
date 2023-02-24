import { Outlet} from "react-router-dom";
import Navbar from '../components/navbar'
import '../assets/css/app.css';

import { useCookies } from "react-cookie";
import NumericInput from 'react-numeric-input';
import React, { useEffect, useState } from "react";

import Footer from '../components/footer'
import Product from "../components/product";

const SERVER = "http://127.0.0.1:8000";

const Item = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cart"]);
  const [qty,setQty]=useState(1);
  const [size,setSize]=useState(20);
  const [itemData, setItemData] = useState({
    id: 0,
    model: "",
    price: 0,
    mark: "",
    description: "",
  });
  const[photos,setPhotos]=useState([]);

  useEffect(()=>{
    let data = fetch (`${SERVER}/items`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
      //body: JSON.stringify({'email': email, 'password': password})
    })
    .then((response) => response.json())
    .then((data)=>{
      console.log(data["items"][0]);
      setItemData({
        id: data["items"][0]["id"],
        model: data["items"][0]["model"],
        price: data["items"][0]["price"],
        mark: data["items"][0]["mark"],
        description: data["items"][0]["description"],
      })
      for(let i=0;i<data["items"][0]["photos"].length;i++){
        photos.push(data["items"][0]["photos"][i]["photo_url"]);
      }
      console.log(photos[1]);
      return data;
    })
    .catch((err) => console.log(err));
  }, []);

  const addToCart = (id,quantity,size) => {
    let cart1 = cookies["cart"] || [];

    let cartObj = {
      cart: []
    };

    if (cart1.length === 0) {
      cartObj.cart.push({id: id,quantity: quantity, size: size});
      try {
        // Convert the cart array to a JSON string and set it as the cookie value
        setCookie("cart", JSON.stringify(cartObj), {path: "/"});
      } catch (error) {
        console.error("Error setting cart cookie:", error);
      }
    }
    else{
      cart1.cart.push({id: id,quantity: quantity, size: size});
      setCookie("cart", JSON.stringify(cart1), {path: "/"});
    }
  }
  
  const removeItemFromCart = (id,size)=> {
    let cart1 = cookies["cart"] || [];

    let cartObj = {
      cart: []
    };

    if (cart1.length !== 0) {
      for(let i=0;i<cart1.cart.length;i++){
        if(cart1.cart[i]["id"]===id && cart1.cart[i]["size"]===size){
        }
        else{
          cartObj.cart.push(cart1.cart[i]);
        }
      }
    }
    try {
      // Convert the cart array to a JSON string and set it as the cookie value
      setCookie("cart", JSON.stringify(cartObj), {path: "/"});
    } catch (error) {
      console.error("Error setting cart cookie:", error);
    }
  }

  const getCart = () => {
    let cart = cookies["cart"] || [];
    if (cart.length === 0) {
      console.log("Cart is empty");
      cart=null;
    }
    else{
      console.log(cart);
    }
  }

  const removeCart=()=>{
    removeCookie("cart",{path:"/"});
    console.log("remove");
  }

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Outlet></Outlet>
      <Product id={itemData.id} model={itemData.model} price={itemData.price} brand={itemData.mark} name='name_not_set' imageSrc={photos[0]}></Product>
      <NumericInput min={1} value={qty} max={100} onChange={(e) =>{ setQty(e);}} />
      <NumericInput min={20} value={size} max={44} onChange={(e) =>{ setSize(e);}} />
      <button  onClick={() => {getCart();}}>get cookie</button>
      <button onClick={() => {removeCart();}} > Delete cart cookie </button>
    
      <button onClick={()=>{addToCart(itemData["id"],qty,size);}}>add cookie</button>
    
      <button onClick={()=>{ removeItemFromCart(itemData["id"],size);}}>remove item</button>
      <button onClick={()=>{console.log(itemData);}}>show data</button>
      <Footer />
    </div>
  );
}

export default Item;