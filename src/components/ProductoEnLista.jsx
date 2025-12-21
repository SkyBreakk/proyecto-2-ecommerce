import DeleteProductModal from "./modals/DeleteProductoModal";
import { useState } from "react";
import MostrarProductoModal from "./modals/MostrarProductoModal";

function ProductoEnLista({ producto, borrarProducto , updateDataProduct}) {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarProducto, setMostrarProducto] = useState(false);

    function updateData(newData) {
        updateDataProduct(newData);
    }

    return <tr>
        <td>{producto.title}</td>
        <td>{producto.category}</td>
        <td>{producto.price}</td>
        <td>
            <div className="container d-flex align-items-center gap-2">
                <button className="btn admin-editar-producto btn-sm"
                    onClick={() => { setMostrarProducto(true) }}>
                    <i className="bi bi-pencil-square"></i>
                </button>
                <button className="btn admin-borrar-producto btn-sm"
                    onClick={() => { setMostrarModal(true) }}>
                    <i className="bi bi-x-lg"></i>
                </button>
                <DeleteProductModal producto={producto} mostrarModal={mostrarModal}
                    setMostrarModal={() => setMostrarModal(false)}
                    confirmarBorrado={() => {
                        borrarProducto();
                        setMostrarModal(false);
                    }} />
                <MostrarProductoModal producto={producto} mostrarProducto={mostrarProducto}
                    setMostrarProducto={() => setMostrarProducto(false)} 
                    updateData = { updateData }
                    />
            </div>
        </td>
    </tr>
}

export default ProductoEnLista