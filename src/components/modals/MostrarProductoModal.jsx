import { useState } from "react"
import { useForm } from "react-hook-form";

function MostrarProductoModal({ producto, mostrarProducto, setMostrarProducto }) {

    // Variables de estado para los mensajes de error 
    const [mensajeNombre, setMensajeNombre] = useState(false);
    const [mensajePrecio, setMensajePrecio] = useState(false);
    const [mensajeCategoria, setMensajeCategoria] = useState(false);

    // declaracion de propiedades del useForm
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    // función de submit del form
    const confirmarGuardar = (data) => {
        if (data.nombre == "") {
            setMensajeNombre(true);
        } else {
            setMensajeNombre(false);
            
            if (data.precio == "") {
                setMensajePrecio(true);
            } else {
                setMensajePrecio(false);
                
                if (data.categoria == "") {
                    setMensajeCategoria(true);
                } else {
                    setMensajeCategoria(false);
                
                    
                }
            }
        }
    }

    if (!mostrarProducto) {
        return null
    }
    else {
        return <div className="modal-editar-producto">
            <div className="row ventana-editar-producto p-3 rounded">
                <div className="col-12 text-center">
                    <h3>Editar producto</h3>
                </div>
                <form onSubmit={handleSubmit(confirmarGuardar)} id="editForm" noValidate>
                    <div className="col-12 my-2" >
                        <label className="form-label" >Nombre</label>
                        <input {...register("nombre", { required: "Este campo es obligatorio" })}
                            className="form-control" type="text" id="nombre"
                            value={producto.title} />
                        {mensajeNombre && (<p className="text-danger">{errors.nombre.message}</p>)}
                    </div>
                    <div className="col-12 my-2" >
                        <label className="form-label" >Precio</label>
                        <input {...register("precio", { required: "Este campo es obligatorio" })}
                            className="form-control" type="text" id="precio"
                            value={producto.price} />
                        {mensajePrecio && (<p className="text-danger">{errors.precio.message}</p>)}
                    </div>
                    <div className="col-12 my-2" >
                        <label className="form-label" >Categoría</label>
                        <input {...register("categoria", { required: "Este campo es obligatorio" })}
                            className="form-control" type="text" id="categoria"
                            value={producto.category} />
                        {mensajeCategoria && (<p className="text-danger">{errors.categoria.message}</p>)}
                    </div>
                    <div className="col-12 my-2" >
                        <label className="form-label" >Descripción</label>
                        <textarea {...register("descripcion")} className="form-control" type="text" id="descripcion"
                            value={producto.description} />
                    </div>
                    <div className="col-12 my-2" >
                        <label className="form-label" >URL de imagen de producto</label>
                        <input {...register("imagen")} className="form-control" type="text" id="imagen"
                            value={producto.image} />
                    </div>
                </form>
                <div className="d-flex justify-content-end gap-2 mt-2">
                    <button type="submit" form="editForm"
                        className="boton-aceptar-editar" >Guardar Cambios</button>
                    <button className="boton-cancelar-editar"
                        onClick={setMostrarProducto}>Cancelar</button>
                </div>
            </div>
        </div>
    }
}
export default MostrarProductoModal