import { useState, useEffect } from "react";
import ListarUsuarios from "../components/ListarUsuarios";
import "../assets/css/AdminScreen.css";
import ListaProductos from "../data/productos.json";
import ProductoEnLista from "../components/ProductoEnLista";
import NewProductModal from "../components/modals/NewProductoModal";

function AdminScreen() {
  // Carga de usuarios en la variable de estado
  const [usuarios, setUsuarios] = useState(
    JSON.parse(localStorage.getItem("usuarios")) || []
  );

  // Carga de usuarios en el LocaleStorage
  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  // Borrado de usuario
  function borrarUsuario(correo) {
    setUsuarios(
      usuarios.filter((usuario) => {
        return usuario.correo != correo;
      })
    );
  }

  // Carga de productos en la variable de estado
  const [tablaProductos, setTablaProductos] = useState(
    JSON.parse(localStorage.getItem("productos")) || ListaProductos
  );

  // Carga de productos en el LocaleStorage
  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(tablaProductos));
  }, [tablaProductos]);

  // Borrado de producto
  function borrarProducto(id) {
    setTablaProductos(
      tablaProductos.filter((producto) => {
        return producto.id != id;
      })
    );
  }

  // Cargar producto nuevo en la variable de estado
  function cargarProducto(nuevoDato) {
    let auxID = nuevoDato.id;
    let bandera = tablaProductos.findIndex((auxProducto) => {
      return auxProducto.id == auxID;
    });

    while (bandera != -1) {
      auxID = auxID + 1;
      bandera = tablaProductos.findIndex((auxProducto) => {
        return auxProducto.id == auxID;
      });
    }
    nuevoDato.id = auxID;
    setTablaProductos([...tablaProductos, nuevoDato]);
  }

  // Función para editar un producto
  const updateProduct = (newData) => {
    setTablaProductos((prevProductos) =>
      prevProductos.map((p) => (p.id === newData.id ? newData : p))
    );
  };

  // Variable de estado para mostrar el modal de nuevo producto
  const [nuevoProducto, setNuevoProducto] = useState(false);

  return (
    <>
      <section className="container-fluid admin-box">
        <div className="row align-items-center py-3">
          <div className="col-12 col-md-6 offset-md-3 p-3 admin-contenedor rounded">
            <div className="text-center mb-3">
              <h1>Usuarios registrados</h1>
            </div>
            <table className="table table-striped table-light">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario, index) => (
                  <ListarUsuarios
                    usuario={usuario}
                    key={index}
                    borrarUsuario={() => borrarUsuario(usuario.correo)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="row align-items-center py-3">
          <div className="col-12 col-md-6 offset-md-3 p-3 admin-contenedor rounded">
            <div className="text-center mb-3">
              <h1>Productos registrados</h1>
            </div>
            <div className="d-grid my-3">
              <button
                className="btn admin-nuevo-producto py-2 fs-6"
                onClick={() => setNuevoProducto(true)}
              >
                Agregar Producto
              </button>
            </div>
            <NewProductModal
              show={nuevoProducto}
              onClose={() => setNuevoProducto(false)}
              enviarDatos={cargarProducto}
              cantidad={tablaProductos.length}
            />
            <table className="table table-striped table-light">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tablaProductos.map((producto, index) => {
                  return (
                    <ProductoEnLista
                      key={index}
                      producto={producto}
                      borrarProducto={() => borrarProducto(producto.id)}
                      updateDataProduct={updateProduct}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminScreen;
