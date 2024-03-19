/* eslint-disable react/prop-types */


export function Item({product}) {
  return (
    <article className="border rounded-md ">
    <img src={product.thumbnail} alt={product.title} />
    <p>$ {product.price}</p>
    <h3>{product.title}</h3>
  </article>
  )
}
