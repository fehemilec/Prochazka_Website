import "./CartItemOrder.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const CartItemOrder = ({ item }) => {


  return (
    <div className="cartitem1">
      <div className="cartitem__image1">
        <img src={item.imageUrl} alt={item.name} />
      </div>
        <p className="name">{item.name}</p>
      <p className="cartitem__price">{item.qty}x{item.price} = Kč {item.qty * item.price}</p>
    </div>
  );
};

export default CartItemOrder;