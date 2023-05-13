import { useState, createContext } from "react";

export const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);
  console.log(carrito);

  const agregarProducto = (item, cantidad) => {
    if (!checkCarrito(item.id)) {
      setCarrito(prev => [...prev, { item, cantidad }])
    } else {
      console.log("El producto ya se encuentra en el carrito")
    }
  }

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
    setCarrito(carritoActualizado);
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }
  const checkCarrito = (id) => {
    return carrito.some(prod => prod.id === id);
  }

  return (
    <CarritoContext.Provider value= { {carrito, agregarProducto, eliminarProducto, vaciarCarrito}}>
      {children}
    </CarritoContext.Provider>

  )
}