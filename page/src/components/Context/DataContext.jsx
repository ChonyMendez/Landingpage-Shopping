import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const buyProducts = (product) => {
    const productRepeat = cart.find((item) => item.id === product.id);

    if (productRepeat) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quanty: item.quanty + 1 } : item)));
    } else {
      setCart([...cart, { ...product, quanty: 1 }]);
    }
  };

  return <DataContext.Provider value={{ cart, setCart, buyProducts }}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
