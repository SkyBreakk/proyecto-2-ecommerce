function MostrarProductoModal({ producto, mostrarProducto, setMostrarProducto }) {
    if (!mostrarProducto) {
        return null
    }
    else {
        return <div onClick={(e) => e.stopPropagation()}>
            <div>
            <div>
                <p>{producto.title}</p>
            </div>
            <div>
                <p>{producto.price}</p>
            </div>
            <div>
                <p>{producto.category}</p>
            </div>
            <div>
                <p>{producto.description}</p>
            </div>
            <div>
                <img src={producto.image} alt="Imagen_de_Producto" />
            </div>
            </div>
            <div>
                <button>Guardar Cambios</button>
                <button onClick={setMostrarProducto}>Cancelar</button>
            </div>
        </div>
    }
}
export default MostrarProductoModal