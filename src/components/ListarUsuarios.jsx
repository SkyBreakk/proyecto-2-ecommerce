import "../assets/css/AdminScreen.css"

function ListarUsuarios({ usuario,borrarUsuario }) {

    return <tr>
        <td>{usuario.nombre}</td>
        <td>{usuario.correo}</td>
        <td>
            <button className="btn admin-boton btn-sm" 
            onClick={ () => borrarUsuario(usuario.correo) }
            type="button">Borrar</button>
        </td>
    </tr>
}

export default ListarUsuarios
