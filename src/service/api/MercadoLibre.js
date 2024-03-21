export async function getProduct(limit = "", searchQuery) {
  const URL_BASE = `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&limit=${limit}`;
  try {
    const res = await fetch(URL_BASE);
    const data = await res.json();
    return data.results;
  } catch (error) {
    throw new Error("Error en la busqueda de producto");
  }
}


export async function getProductById(id) {
  const URL_BASE = `https://api.mercadolibre.com/items/${id}`;
  try {
    const res = await fetch(URL_BASE);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching product');
  }
}