import { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const ProductContext = createContext();

function Product({ children }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products');

      if (data) {
        setProduct(data);
      }
    }
    loadProducts();
  }, []);
}

export { ProductContext, Product };
