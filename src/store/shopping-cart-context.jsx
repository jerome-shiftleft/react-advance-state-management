import {createContext} from 'react';

const CartContext = createContext({
  items: [],
  addItemToCart: () => {}
});

export {CartContext};