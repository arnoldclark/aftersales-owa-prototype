import { createContext } from 'react';

const PartContext = createContext({
  partOne: {
    name: null,
    inStock: true,
    price: 0
  },
  partTwo: {
    name: null,
    inStock: true,
    price: 0
  }
});

export default PartContext;