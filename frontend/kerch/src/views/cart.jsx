import { Outlet} from "react-router-dom";
import Navbar from '../components/navbar'
import '../assets/css/app.css';

import { useCookies } from "react-cookie";
import NumericInput from 'react-numeric-input';
import React, { useEffect, useState } from "react";

import Footer from '../components/footer'
import ProductInCart from "../components/productInCart";

const SERVER = "http://127.0.0.1:8000";

const Cart = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cart"]);
  let [itemsData, setItemsData] = useState([]);
  //const[photos,setPhotos]=useState([]);
  let[ cartItems,setCartItems]=useState([]);

    const getCart = () => {
        let cart = cookies["cart"] || [];
        if (cart.length === 0) {
            console.log("Cart is empty");
            cart=null;
        }
        else{
             console.log(cart);
        }
        return cart;
    }

    const removeItemFromCart = (id, size) => {
        let cart1 = cookies["cart"] || [];
      
        let cartObj = {
          cart: []
        };
        
        let index = null;

        if (cart1.length !== 0) {
          for (let i = 0; i < cart1.cart.length; i++) {
            if (cart1.cart[i]["id"] === id && cart1.cart[i]["size"] === size) {
                index=i;
               // remove item from cart1
              break;
            }
          }
          
          if (index !== null) {
            cart1.cart.splice(index, 1);
            const elements= itemsData.map((item,d_index)=>(
                <div key={d_index}>
                    <ProductInCart
                        id={item["id"]} 
                        model={item["model"]} 
                        price={item["price"]} 
                        brand={item["mark"]} 
                        name={item["description"]} 
                        imageSrc={item["imageSrc"]}
                        quantity={item["quantity"]}
                        size={item["size"]}
                    >
                    </ProductInCart>
                    <button onClick={()=>removeItemFromCart(item["id"],item["size"])}>usun</button>
                </div>
            ));
            //console.log(elements);
            setCartItems(elements);
          }

          // Remove item from cartItems
        }
      
        try {
          // Convert the cart array to a JSON string and set it as the cookie value
          setCookie("cart", JSON.stringify(cart1), { path: "/" });
        } catch (error) {
          console.error("Error setting cart cookie:", error);
        }
        this.forceUpdate();
      };

    useEffect(()=>{
        let requestBody={"items":[]};
        let cart = cookies["cart"] || [];
        console.log(cart["cart"].length);
        for(let i=0;i<cart["cart"].length;i++){
            console.log(i);
            requestBody["items"].push({"id":cart["cart"][i]["id"] , "photo":true , "size": false});
        }
        console.log("request");
        console.log(requestBody);

        let data = fetch (`${SERVER}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
        .then((response) => response.json())
        .then((data)=>{
            console.log(data["items"]);
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
                itemsData.push(temp);
            }
            console.log(itemsData);
            const elements= itemsData.map((item,index)=>(
                <div key={index}>
                    <ProductInCart
                        id={item["id"]} 
                        model={item["model"]} 
                        price={item["price"]} 
                        brand={item["mark"]} 
                        name={item["description"]} 
                        imageSrc={item["imageSrc"]}
                        quantity={item["quantity"]}
                        size={item["size"]}
                    >
                    </ProductInCart>
                    <button onClick={()=>removeItemFromCart(item["id"],item["size"])}>usun</button>
                </div>
            ));
            //console.log(elements);
            setCartItems(elements);
            
            //return elements;
        })
        .catch((err) => console.log(err));
    }, []);

    const removeCart=()=>{
        removeCookie("cart",{path:"/"});
        console.log("remove");
    }

    return (
        <div className="App">
            <Navbar />
            <Outlet />
            <Outlet></Outlet>
            <div className="cartItems">
                {cartItems}
            </div>
            
            <button  onClick={() => {getCart();}}>get cookie</button>
            <button onClick={() => {removeCart();}} > Delete cart cookie </button>

            <button onClick={()=>{ removeItemFromCart(1,20);}}>remove item</button>
            <Footer />
        </div>
    );
}

/*
            <NumericInput min={1} value={qty} max={100} onChange={(e) =>{ setQty(e);}} />
            <NumericInput min={20} value={size} max={44} onChange={(e) =>{ setSize(e);}} /> 
*/
export default Cart;