function DeleteUserModal({ show, onClose, nombre, borrarUsuario}) {

    if (!show) {
        return null
    } else {
        return <div className="modal-borrar-usuario">
            <div className="ventana-borrar-usuario p-3 rounded">
                <div className="my-2">
                    <p>¿Desea borrar el usuario {nombre}?</p>
                </div>
                <div className="d-flex justify-content-end gap-2">
                    <button className="boton-borrar-usuario" onClick={borrarUsuario} >Aceptar</button>
                    <button className="boton-cancelar-usaurio" onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    }
}
export default DeleteUserModal