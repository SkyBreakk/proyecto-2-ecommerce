import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function MostrarProductoModal({
  producto,
  mostrarProducto,
  setMostrarProducto,
  updateData,
}) {
  const [nuevoProducto, setNuevoProducto] = useState(false);
  const [rateValue, setRateValue] = useState(producto.rating.rate);
  const [countValue, setCountValue] = useState(producto.rating.count);

  // Función para el botón de formatear el ranking
  const resetRanking = () => {
    setRateValue(0);
    setCountValue(0);
  };

  // Función del boton cancelar. Vuelve los inputs a sus valores iniciales
  const reset = () => {
    resetForm({
      nombre: producto.title,
      precio: producto.price,
      categoria: producto.category,
      descripcion: producto.description,
      imagen: producto.image,
    });
    setRateValue(producto.rating.rate);
    setCountValue(producto.rating.count);
    setMostrarProducto();
  };

  // declaracion de propiedades del useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
    watch,
  } = useForm({
    defaultValues: {
      nombre: producto.title,
      precio: producto.price,
      categoria: producto.category,
      descripcion: producto.description,
      imagen: producto.image,
    },
  });

  const watchImagen = watch("imagen", producto.image);

  // función de submit del form
  const confirmarGuardar = (data) => {
    const productoActualizado = {
      ...producto, // Mantenemos propiedades originales si las hay
      title: data.nombre,
      price: data.precio,
      category: data.categoria,
      description: data.descripcion,
      image: data.imagen,
      rating: { rate: rateValue, count: countValue },
    };

    updateData(productoActualizado);
    setMostrarProducto();
  };

  if (!mostrarProducto) {
    return null;
  }
  return (
    <section className="modal-editar-producto">
      <section className="ventana-editar-producto p-2 rounded">
        <form onSubmit={handleSubmit(confirmarGuardar)} name="editar-producto">
          <div className="row">
            <div className="col-12">
              <div className="text-center mt-2">
                <h3>Editar producto</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 my-2">
                  <label className="form-label" htmlFor="nombre">
                    Nombre
                  </label>
                  <input
                    {...register("nombre", {
                      required: "Este campo es obligatorio",
                    })}
                    className="form-control form-control-sm"
                    type="text"
                    id="nombre"
                    autoComplete="off"
                  />
                  {errors.nombre && (
                    <p className="text-danger">{errors.nombre.message}</p>
                  )}
                </div>
                <div className="col-12 my-2">
                  <label className="form-label" htmlFor="precio">
                    Precio
                  </label>
                  <input
                    {...register("precio", {
                      required: "Este campo es obligatorio",
                    })}
                    className="form-control form-control-sm"
                    type="text"
                    id="precio"
                    autoComplete="off"
                  />
                  {errors.precio && (
                    <p className="text-danger">{errors.precio.message}</p>
                  )}
                </div>
                <div className="col-12 my-2">
                  <label className="form-label" htmlFor="categoria">
                    Categoría
                  </label>
                  <input
                    {...register("categoria", {
                      required: "Este campo es obligatorio",
                    })}
                    className="form-control form-control-sm"
                    type="text"
                    id="categoria"
                    autoComplete="off"
                  />
                  {errors.categoria && (
                    <p className="text-danger">{errors.categoria.message}</p>
                  )}
                </div>
                <div className="col-12 my-2">
                  <label className="form-label" htmlFor="descripcion">
                    Descripción
                  </label>
                  <textarea
                    {...register("descripcion")}
                    className="form-control form-control-sm"
                    type="text"
                    id="descripcion"
                    autoComplete="off"
                  />
                </div>
                <div className="col-12 my-2">
                  <section className="d-flex flex-column border border-black rounded">
                    <section className="d-flex justify-content-center">
                      <div className="rounded p-2">
                        <p>Ranking: {rateValue} </p>
                      </div>
                      <div className="rounded p-2">
                        <p>Votos: {countValue} </p>
                      </div>
                    </section>
                    <div className="d-grid p-2">
                      <button
                        className="boton-aceptar-editar"
                        type="button"
                        onClick={resetRanking}
                      >
                        Formatear rating
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 my-2">
                  <label className="form-label" htmlFor="imagen">
                    URL de imagen de producto
                  </label>
                  <input
                    {...register("imagen")}
                    className="form-control form-control-sm"
                    type="text"
                    id="imagen"
                    autoComplete="off"
                  />
                  <section className="imagen-editar-producto d-flex justify-content-center p-2">
                    <img
                      className="rounded p-2"
                      src={watchImagen}
                      alt="Imagen de Producto"
                    />
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <section className="d-flex justify-content-end gap-2 mb-2">
                <button type="submit" className="boton-aceptar-editar">
                  Guardar Cambios
                </button>
                <button
                  className="boton-cancelar-editar"
                  type="button"
                  onClick={reset}
                >
                  Cancelar
                </button>
              </section>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
}
export default MostrarProductoModal;
