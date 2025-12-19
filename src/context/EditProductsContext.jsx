import { createContext, useState } from "react";

export const EditProductsContext = createContext(null);

export function EditProductsProvider({ children }) {

    const [productoNuevo, setProductoNuevo] = useState(null);

    function cargaProducto(id, nombre, precio, descripcion, categoria, imagen) {

        return {
            id,
            title: nombre,
            price: precio,
            description: descripcion,
            category: categoria,
            image: imagen,
            rating: {
                rate: 0,
                count: 0
            }
        }
    }

    const dataProduct = { productoNuevo };

    return <EditProductsContext.Provider value={ dataProduct } >
        {children}
    </EditProductsContext.Provider>
}
