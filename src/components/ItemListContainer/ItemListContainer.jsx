import React, { useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/react'
import ItemList from "./ItemList/ItemList.jsx"


function ItemListContainer({saludo}) {
const [items, setItems] = useState({});



useEffect(() => {
    let productos =[{id: 2, nombre: "CHORIZOS", precio: 1600, descripcion: "Jugoso pieza de carne con marmolado unico", img: "https://www.wagyusteakco.com/wp-content/uploads/2020/05/CHORIZO.jpg"
  },
  {id: 3, nombre: "VACIO", precio: 3100, descripcion: "Jugoso pieza de carne con marmolado unico",img: "https://media.ambito.com/p/11cedb2a662608a0353992c077395d3d/adjuntos/239/imagenes/038/603/0038603147/carne-wagyujpg.jpg"
  },
  {id: 4, nombre: "LOMO",precio: 2600, descripcion: "Jugoso pieza de carne con marmolado unico",img: "https://media-cdn.tripadvisor.com/media/photo-s/18/80/25/65/bife-de-lomo-wagyu-americano.jpg"
  },
  {id: 5, nombre: "TOMAHAWK",precio: 2400, descripcion: "Jugoso pieza de carne con marmolado unico",img: "https://cdn.shopify.com/s/files/1/0276/8131/products/Tomahawk-03.jpg?v=1618410529"
  },
  {id: 6, nombre: "T-BONE",precio: 2500, descripcion: "Jugoso pieza de carne con marmolado unico",img: "https://www.primeraedicion.com.ar/wp-content/uploads/2021/01/carne-kobe-02-01-21.jpg"
  }
];
    new Promise ((resolve)=>{
    setTimeOut(()=>{
    resolve(productos);
    }, 2000);

    }).then((data)=>{
        setItems(data);
    })
}, [])

return (

 <div>
    <span>saludo</span>
    {items.length ?
    <div>
    <ItemList items= {items}/>
    </div> :
    <Spinner></Spinner>
    }
 </div>
  )
}
export {ItemListContainer};