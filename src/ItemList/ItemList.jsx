import React from 'react'

export const ItemList = ({items}) => {
  return (
    <>
    {items.map(item=> <Item key={indx} id={item.id}  nombre={item.nombre} precio={item.precio} descripcion={item.descripcion} img={item.img}/>)}
    </>
  );
}
