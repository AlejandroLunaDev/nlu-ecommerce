

export function ItemDetail({product, loading}) {


  if (loading) {
    return <p>Cargando...</p>; // Mostrar mensaje de carga mientras se obtienen los datos
  }

  if (!product) {
    return <p>Producto no encontrado.</p>; // Mostrar mensaje si no se encuentra el producto
  }

  return (
    <article className="">
      <header className="">
        <img className="" src={product.thumbnail} alt={product.title} />
      </header>
      <div>
      <h3 className="">{product.title}</h3>
      <div>
      <p className="">{product.attributes[0].name}</p>
      <span>SKU:{product.id}</span>
      </div>
      <p className="">$ {product.price}</p>
      </div>
    </article>
  );
}

export function ItemDetailContianer() {
  return (
    <ItemDetail />
  );
}
