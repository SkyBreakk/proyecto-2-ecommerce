import { useState, useEffect } from "react";
import ListarUsuarios from "../components/ListarUsuarios"
import "../assets/css/AdminScreen.css"

function AdminScreen() {
    const [usuarios, setUsuarios] = useState(
        JSON.parse(localStorage.getItem("usuarios")) || []);

    useEffect(() => {
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
    }, [usuarios]);

    function borrarUsuario(correo) {
        setUsuarios(
            usuarios.filter((usuario) => {
                return usuario.correo != correo
            })
        );
    }

    return <>
        <section className="container-fluid">
            <div className="row vh-100 align-items-center">
                <div className="col-12 col-md-6 offset-md-3 p-3 admin-contenedor rounded">
                    <table className="table table-striped table-light">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuarios.map((usuario, index) => (
                                    <ListarUsuarios usuario={usuario} key={index} borrarUsuario={borrarUsuario} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </>
}

export default AdminScreen