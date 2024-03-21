

export function ItemDetail({product, loading}) {


  if (loading) {
    return <p>Cargando...</p>; // Mostrar mensaje de carga mientras se obtienen los datos
  }

  if (!product) {
    return <p>Producto no encontrado.</p>; // Mostrar mensaje si no se encuentra el producto
  }

  return (
    <article className="border border-[#61005D] rounded-md p-3">
      <header className="flex justify-center border-b border-b-[#61005D]">
        <img className="mb-2" src={product.thumbnail} alt={product.title} />
      </header>
      <p className="text-md font-bold">{product.attributes[0].name}</p>
      <h3 className="text-sm">{product.title}</h3>
      <p className="font-medium">$ {product.price}</p>
    </article>
  );
}

export function ItemDetailContianer() {
  return (
    <ItemDetail />
  );
}
