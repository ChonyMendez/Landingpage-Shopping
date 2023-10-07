import PropTypes from "prop-types";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const CartItemCounter = ({ product }) => {
  const { cart, setCart, buyProducts } = useContext(DataContext);

  const decrease = () => {
    const productRepeat = cart.find((item) => item.id === product.id);

    if (productRepeat && productRepeat.quanty > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quanty: productRepeat.quanty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <p className='counter-button' onClick={decrease} style={{ fontSize: '24px' }}>⬇️</p>
      <p style={{ fontSize: '24px' }}>{product.quanty}</p>
      <p className='counter-button' onClick={() => buyProducts(product)} style={{ fontSize: '24px' }}>⬆️</p>
    </>
  );
};

CartItemCounter.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired, // Asegúrate de ajustar el tipo de id según tu estructura de datos
    quanty: PropTypes.number.isRequired, // Ajusta el tipo según tu estructura de datos
  }).isRequired,
};

export default CartItemCounter;
