import { useState, useEffect, useContext } from 'react';
import { getProduct } from '../service/api/MercadoLibre';
import { importProductsToFirebase } from '../service/firebase/firebase';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';

export function useProductList(limit) {
  const [products, setProducts] = useState([]);
  const { filterText } = useContext(AppContext);
  const { category } = useParams();



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let searchQuery = category;

        if (filterText) {
          searchQuery = filterText;
        }

        const data = await getProduct(limit, searchQuery);
        setProducts(data);

        // Importar productos a Firebase
        await importProductsToFirebase(limit, searchQuery);
        console.log('Productos importados a Firebase.');
      } catch (error) {
        console.error('Error al obtener productos:', error.message);
      }
    };

    fetchProducts();
  }, [limit, filterText, category]);

  return products;
}
