import { useState } from "react";
import DeleteUserModal from "./modals/DeleteUserModal";

function ListarUsuarios({ usuario, borrarUsuario }) {
  // variable de estado para mostrar modal
  const [showModal, setShowModal] = useState(false);

  // filtro para evitar borrado de admin
  let validate;
  if (usuario.rol === "admin") {
    validate = true;
  } else {
    validate = false;
  }

  return (
    <tr>
      <td className="d-none d-sm-table-cell">{usuario.nombre}</td>
      <td>{usuario.correo}</td>
      <td>
        <button
          className="btn admin-borrar-usuario btn-sm"
          onClick={() => setShowModal(true)}
          type="button"
          disabled={validate}
        >
          Borrar
        </button>
        <DeleteUserModal
          show={showModal}
          onClose={() => setShowModal(false)}
          borrarUsuario={borrarUsuario}
          nombre={usuario.nombre}
        />
      </td>
    </tr>
  );
}

export default ListarUsuarios;
