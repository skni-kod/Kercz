import "../assets/css/components/itemCard.css";
import React from 'react'

const ItemCard = ({ item, currency}) => {
    const { img , name, size, price, quantity, brand} = item;
  return (
    <div className="item-card">
      <div className="flex-center">
        <div className="img-div-card">
          <td className="product-field"><img src={img} alt={name} /></td>
        </div>
        <div className="description-div-card">
          <p className="item-price-card">{price}{currency}</p>
          <p className="item-brand-card">{brand}</p>
          <p className="item-name-card">{name}</p>
          <hr></hr>
          <div className="flex-row">
            <p className="item-size-card">Rozmiar</p>
            <select name="sizeSelect" value={size}> {/* wartosci pobierane z bazy (dostępne rozmiary dla danego produktu) */}
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option> 
            </select>
            <p className="item-quantity-card">Ilość</p>
            <select name="quantitySelect" value={quantity}> {/* wartosci pobierane z bazy (ilosc danego produktu)*/}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option> 
            </select>
          </div>
          <hr></hr>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default ItemCard