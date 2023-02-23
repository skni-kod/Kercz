import '../assets/css/views/shoppingCart.css';
import { ItemCard } from "../components";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Delivery1 from '../assets/icons/delivery1.svg';
import Delivery2 from '../assets/icons/delivery2.svg';
import Delivery3 from '../assets/icons/delivery3.svg';
import Payment1 from '../assets/icons/payment1.svg';
import Payment2 from '../assets/icons/payment2.png';
import KerczLogo from '../assets/icons/kerczLogo.svg';

const ShoppingCart = () =>{
    // TO DO:Future list is passed from other source
    const exampleList = [
        {
            id: 123456789,
            img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fdd2ed4315b74f6ea506acb600b20504_9366/OZWEEGO_Shoes_Bezowy_FX6029_01_standard.jpg',
            name: 'OZWEEGO',
            brand: 'adidas',
            size: 42,
            price: 549,
            quantity: 1,
        },
        {
            id: 123456788,
            img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d8f07398f114ae897b0adfd010611de_9366/ZX_1K_Boost_2.0_Shoes_Czern_GZ3551_01_standard.jpg',
            name: 'ZX 1K BOOST 2.0',
            brand: 'adidas',
            size: 39,
            price: 499,
            quantity: 2,
        },
        {
            id: 123456787,
            img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_Bialy_B75806_01_standard.jpg',
            name: 'SAMBA OG SHOES',
            brand: 'adidas',
            price: 549,
            size: 40,
            quantity: 1,
        }
    ];
    const currency =  'zł'; 
    let total = 0;
    exampleList.forEach(element => {
        total += (element.price * element.quantity);
    });
    function currentYear() {
        const dateNow = new Date();
        return dateNow.getFullYear();
    }

    const [delivery, setDelivery] = useState("0,00");
    return (
    <div className='main-shopping-cart'>
        <div className='shopping-baner'>
            <img className='kercz-baner-img' src={KerczLogo}></img>
            <p className="first"><b>1. Zawartość</b></p>
            <hr/>
            <p className='second'>2. Dane adresowe</p>
            <hr/>
            <p className='third'>3. Potwierdzenie</p>
        </div>
        <hr/>
        <h2 className='main-name-cart'>zawartość</h2>
        <div className='inner-main-shopping-cart'>
            <div className='left-shopping-cart'>
                
                <hr></hr>
                {
                    exampleList.map((item)=>(
                        <ItemCard key={item.id} item={item} currency={currency} />
                    ))
                }
                <h2>metoda dostawy</h2>
                <div className='delivery-container'>
                    <div className='column-flex'>
                        <label for="delivery1" onClick={()=>setDelivery("8.99")}>
                            <div className='row-flex delivery-margin'>
                                <input type="radio" id="delivery1" name="delivery-choose"/>
                                <img className='delivery-img' src={Delivery1}></img>
                                <p>Kurier InPost</p>
                                <div className='delivery-right-allign'>
                                    <p className='delivery-price'>8,99 zł</p>
                                </div>
                            </div>
                        </label>
                        <hr/>
                        <label for="delivery2" onClick={()=>setDelivery("8.99")}>
                            <div className='row-flex delivery-margin'>
                                <input type="radio" id="delivery2" name="delivery-choose" />
                                <img className='delivery-img' src={Delivery2}></img>
                                <p>InPost Paczkomat 24/7</p>
                                <div className='delivery-right-allign'>
                                    <p className='delivery-price'>8,99 zł</p>
                                </div>
                            </div>
                        </label>
                        <hr/>
                        <label for="delivery3" onClick={()=>setDelivery("0,00")}>
                            <div className='row-flex delivery-margin'>
                                <input type="radio" id="delivery3" name="delivery-choose"/>
                                <img className='delivery-img' src={Delivery3}></img>
                                <p>Odbiór w sklepie</p>
                                <div className='delivery-right-allign'>
                                    <p className='delivery-price'>0,00 zł</p>
                                </div>
                            </div>
                        </label>
                        <hr/>
                    </div>
                </div>
                <h2>metoda płatności</h2>
                <div className='payment-container'>
                    <div className='column-flex'>
                        <label for="payment1">
                            <div className='row-flex payment-margin'>
                                <input type="radio" id="payment1" name="payment-choose"/>
                                <img className='payment-img' src={Payment1}></img>
                                <p>Blik</p>
                            </div>
                        </label>
                        <hr/>
                        <label for="payment2">
                            <div className='row-flex payment-margin'>
                                <input type="radio" id="payment2" name="payment-choose"/>
                                <img className='payment-img' src={Payment2}></img>
                                <p>Szybki przelew</p>
                            </div>
                        </label>
                        <hr/>
                        <label for="payment3">
                            <div className='row-flex payment-margin'>
                                <input type="radio" id="payment3" name="payment-choose"/>
                                <img className='payment-img monochrome' src={Delivery3}></img>
                                <p>Płatność przy odbiorze</p>
                            </div>
                        </label>
                        <hr/>
                    </div>
                </div>
            </div>
            
            <div className='right-shopping-cart'>
                <hr></hr>
                <div className='right-inner-shopping-cart'>
                    
                    <h3>Podsumowanie</h3>
                    <table>
                        <tr>
                            <td>
                                <p>Wartość produktów</p>
                            </td>
                            <td className='table-gap'>

                            </td>
                            <td>
                                <p id="totalPrice">{total}{currency}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Koszt dostawy</p>
                            </td>
                            <td className='table-gap'>
                                
                            </td>
                            <td>
                                <p id='deliveryPrice'>{delivery}zł</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <hr className='middle-hr'></hr>
                <div className='right-inner-shopping-cart'>
                    <div className='center-flex'>
                    <table>
                        <tr>
                            <td>
                                <p>Suma</p>
                            </td>
                            <td className='table-gap'>
                            </td>
                        </tr>
                    </table>
                    <p id='sum-cost'>{total+parseFloat(delivery)}zł</p>
                    </div>
                    <div className='center-flex'>
                        <button>Przejdź do kasy</button>
                    </div>
                </div>
                <hr></hr>
            </div>
        </div>
        <hr className='bottom-hr'/>
        <div className='bottom-cart'>
            <div className='bottom-left'>
                <Link to="/">
                    <p>&lt;&lt; Wróć do sklepu</p>
                </Link>
            </div>
            <div className='bottom-right'>
                <p className='right-align'>&copy; Kercz {currentYear()}</p>
            </div>
        </div>
    </div>
    );
  }
  
  export default ShoppingCart;