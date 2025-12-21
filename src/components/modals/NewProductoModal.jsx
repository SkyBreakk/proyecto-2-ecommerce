import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"

function NewProductModal({ show, onClose, enviarDatos, cantidad }) {

    // Declaración de propiedades de useForm
    const { register, handleSubmit, formState: { errors }, reset: resetForm } = useForm({
        defaultValues: {
            nombre: "",
            precio: "",
            categoria: "",
            descripcion: "",
            imagen: ""
        }
    });

    function resetInputs() {
        resetForm({
            nombre: "",
            precio: "",
            categoria: "",
            descripcion: "",
            imagen: ""
        });
        onClose();
    }

    // Variable de estado para el nuevo producto
    const [nuevoProducto, setNuevoProducto] = useState(false);

    useEffect(() => {
        if (nuevoProducto) {
            enviarDatos(nuevoProducto);
        }
    }, [nuevoProducto]);

    // Función en HandleSubmit para enviar datos del nuevo producto
    const cargarProducto = (data) => {
        if (data.nombre != "" && data.categoria != "" && data.precio != "") {
            setNuevoProducto({
                id: cantidad,
                title: data.nombre,
                price: data.precio,
                description: data.descripcion,
                category: data.categoria,
                image: data.imagen,
                rating: {
                    rate: 0,
                    count: 0
                }
            });
            resetInputs();
        }
    }

    if (!show) {
        return null
    }

    return <div className="modal-nuevo-producto">
        <div className="ventana-nuevo-producto row p-3 rounded">
            <form onSubmit={handleSubmit(cargarProducto)} noValidate>
                <div className="col-12 my-2">
                    <div className="row">
                        <div className="col-12 col-md-6" >
                            <label className="form-label">Nombre</label>
                            <input className="form-control"
                                {...register("nombre", { required: "Este campo es obligatorio" })} />
                            {errors.nombre && (<p className="text-danger">{errors.nombre.message}</p>)}
                        </div>
                        <div className="col-12 col-md-6" >
                            <label className="form-label">Categoría</label>
                            <input className="form-control"
                                {...register("categoria", { required: "Este campo es obligatorio" })} />
                            {errors.categoria && (<p className="text-danger">{errors.categoria.message}</p>)}
                        </div>
                    </div>
                </div>
                <div className="col-12 my-2">
                    <label className="form-label">Precio</label>
                    <input className="form-control"
                        {...register("precio", {
                            required: "Este campo es obligatorio", pattern: {
                                value: /^[0-9.,]+$/,
                                message: "El precio ingresado no es valido"
                            },
                        })} />
                    {errors.precio && (<p className="text-danger">{errors.precio.message}</p>)}
                </div>
                <div className="col-12 my-2">
                    <label className="form-label">Descripción</label>
                    <textarea className="form-control" {...register("descripcion")} />
                </div>
                <div className="col-12 my-2">
                    <label className="form-label">Url de Imagen</label>
                    <input className="form-control" {...register("imagen")} />
                </div>
                <div className="col-12 d-flex gap-2 justify-content-end my-2">
                    <button className="aceptar-nuevo-producto p-2" type="submit">Crear Producto</button>
                    <button className="cancelar-nuevo-producto p-2" type="button" onClick={resetInputs}>Cancelar</button>
                </div>
            </form>
        </div>
    </div>

}
export default NewProductModal