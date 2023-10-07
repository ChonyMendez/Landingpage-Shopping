import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";


const CartElements = () => {
  const { cart, setCart } = useContext(DataContext);

  const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundId;
    });

    setCart(newCart);
  };

  return cart.map((product) => {
    return (
      <div className="cartContent" key={product.id}>
        <img src={product.img} alt="product-card" />
        <h3 className="name">{product.name}</h3>
        <CartItemCounter product={product} quanty={product.quanty} />
        <h4 className="price">${product.price * product.quanty}</h4>
        <h3 className="cart-delete-button" onClick={() => deleteProduct(product.id)}>❌</h3>
      </div>
    );
  });
};

export default CartElements;