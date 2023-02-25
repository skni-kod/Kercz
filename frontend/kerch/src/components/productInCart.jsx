import "../assets/css/components/product.css";
import Product from "./product";

import { useCookies } from "react-cookie";
import NumericInput from 'react-numeric-input';
import React, { useEffect, useState } from "react";


const ProductInCart = ({id, imageSrc, name, price, brand, model, size, quantity }) => {

    const [cookies, setCookie, removeCookie] = useCookies(["cart"]);

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

    return(
        <div className="productInCart">
            <Product id={id} model={model} price={price} brand={brand} name={name} imageSrc={imageSrc}></Product>
            <div className="productInformation">
                <p>rozmiar: {size}</p>
                <p>ilość: {quantity}</p>
            </div>
        </div>
    )
}

export default ProductInCart;