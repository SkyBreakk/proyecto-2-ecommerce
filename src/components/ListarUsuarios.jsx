
function ListarUsuarios({ usuario, borrarUsuario }) {

    let validate;
    if (usuario.rol === "admin") {
        validate = true;
    } else {
        validate = false;
    }

    return <tr>
        <td>{usuario.nombre}</td>
        <td>{usuario.correo}</td>
        <td>
            <button className="btn admin-borrar-usuario btn-sm"
                onClick={() => borrarUsuario(usuario.correo)}
                type="button" disabled={validate}>Borrar</button>
        </td>
    </tr>
}

export default ListarUsuarios