import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const CartTotal = () => {
  const { cart } = useContext(DataContext);

  const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);
  return (
    <div className='cartTotal'>
      <h2>💳Total a pagar: ${total} </h2>
    </div>
  );
};

export default CartTotal;