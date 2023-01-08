import "../assets/css/components/itemCard.css";
import { ItemCard } from "../components";

const ShoppingCart = () =>{
    // TO DO:Future list is passed from other source
    const exampleList = [
        {
            id: 123456789,
            img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fdd2ed4315b74f6ea506acb600b20504_9366/OZWEEGO_Shoes_Bezowy_FX6029_01_standard.jpg',
            name: 'OZWEEGO',
            size: 42,
            price: 549,
            quantity: 1,
        },
        {
            id: 123456788,
            img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d8f07398f114ae897b0adfd010611de_9366/ZX_1K_Boost_2.0_Shoes_Czern_GZ3551_01_standard.jpg',
            name: 'ZX 1K BOOST 2.0',
            size: 39,
            price: 499,
            quantity: 2,
        },
        {
            id: 123456787,
            img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_Bialy_B75806_01_standard.jpg',
            name: 'SAMBA OG SHOES',
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
    return (
        <div className="main-shopping-cart">
            <h2>Shopping Cart</h2>
            <div className="main-shopping-cart-table">
                <table>
                    <thead>
                        <tr>
                            <th className="product-field"></th>
                            <th>Product</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        exampleList.map((item)=>(
                            <ItemCard key={item.id} item={item} currency={currency} />
                        ))
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="btn-buy"><a href="shopping-cart"><b>Buy now</b></a></td>
                        <td className="total-price-field"><p><b>{total} {currency}</b></p></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
  }
  
  export default ShoppingCart;