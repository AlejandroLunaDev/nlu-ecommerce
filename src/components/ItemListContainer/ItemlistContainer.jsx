/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import {  useParams } from 'react-router-dom'; // Importa useNavigate y useParams
import { getProduct } from '../../service/api/MercadoLibre';

export function ItemlistContainer({ limit }) {
  const [products, setProducts] = useState([]);
 /*  const navigate = useNavigate(); */
  const { category } = useParams(); // Obtiene la categoría de la URL

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProduct(limit, category); // Pasa la categoría a getProduct
        setProducts(data);
      } catch (error) {
        console.error('Error al obtener productos:', error.message);
      }
    };

    fetchProducts();
  }, [limit, category]);

  return (
    <div className="item-list-container">
      <h2>Nuestros Productos</h2>
      <ItemList products={products} />
    </div>
  );
}
