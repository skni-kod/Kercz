import React from 'react'

const ItemCard = ({ item, currency}) => {
    const { img , name, size, price, quantity} = item;
  return (
    <tr>
        <td className="product-field"><img src={img} alt={name} /></td>
        <td><p>{name}</p></td>
        <td><p>{size}</p></td>
        <td><p>{price} {currency}</p></td>
        <td><p>{quantity}</p></td>
        <td><b><p>{quantity * price} {currency}</p></b></td>
    </tr>
  )
}

export default ItemCard