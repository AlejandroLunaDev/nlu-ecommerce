

export function ItemDetail({item}) {




  return (
    <article className="">
      <header className=" ">
        <img className=" h-14" src={item?.imagen} alt={item?.nombre} />
      </header>
      <div>
      <h3 className="">{item?.nombre}</h3>
      <p>{item?.descripcion}</p>
      <p className="">$ {item?.precio}</p>
      </div>
    </article>
  );
}

export function ItemDetailContianer() {
  return (
    <ItemDetail />
  );
}
