import React from 'react'

export const Producto = ({nombre, precio}) => {
  return (
    //TODO: Base para generar el objeto producto
    <div>
            <h2>Nombre: {nombre}</h2>
            <h3>Precio: {precio}</h3>
    </div>
  )
}
