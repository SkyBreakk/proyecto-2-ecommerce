function DeleteProductModal({ mostrarModal, setMostrarModal, producto, confirmarBorrado }) {

    if (!mostrarModal) {
        return null
    } else {
        return <div onClick={ (e) => e.stopPropagation()}>
            <div>
                ¿Desea borrar el producto {producto.title}?
            </div>
            <div>
                <button onClick={confirmarBorrado}>Borrar</button>
                <button onClick={setMostrarModal}>Cancelar</button>
            </div>
        </div>
    }
}

export default DeleteProductModal
