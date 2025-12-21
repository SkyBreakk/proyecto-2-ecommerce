function DeleteProductModal({ mostrarModal, setMostrarModal, producto, confirmarBorrado }) {

    if (!mostrarModal) {
        return null
    } else {
        return <div className="modal-borrar-producto">
            <div className="ventana-borrar-producto rounded p-3">
                <div className="p-3">
                    <p className="fw-6">¿Confirma el borrado del producto {producto.title}?</p>
                </div>
                <div className="d-flex justify-content-end gap-2">
                    <button className="boton-aceptar-borrar" onClick={confirmarBorrado}>Borrar</button>
                    <button className="boton-cancelar-borrar" onClick={setMostrarModal}>Cancelar</button>
                </div>
            </div>
        </div>
    }
}

export default DeleteProductModal
