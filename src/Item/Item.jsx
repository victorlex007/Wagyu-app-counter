import React from 'react'
import { Contador } from '../components/Contador/Contador';

export default function Item({id,nombre, precio, descripcion, img }){
  return (
    <div className='item-container'>
        <h1>{id}</h1>
        <span>{nombre}</span>
        <span>{precio}</span>
        <span>{descripcion}</span>
    <Contador/>
    </div>
  )
}
