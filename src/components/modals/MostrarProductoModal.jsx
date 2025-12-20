import { useState } from "react"
import { useForm } from "react-hook-form";

function MostrarProductoModal({ producto, mostrarProducto, setMostrarProducto }) {

    const [auxProducto, setAuxProducto] = useState({
        title: producto.title,
        price: producto.price,
        category: producto.category,
        description: producto.description,
        image: producto.image,
        rating: {
            rate: producto.rating.rate,
            count: producto.rating.count
        }
    });

    const cambioDeValor = (e) => { }

    const reset = () => {
        setAuxProducto({
            title: producto.title,
            price: producto.price,
            category: producto.category,
            description: producto.description,
            image: producto.image,
            rating: {
                rate: producto.rating.rate,
                count: producto.rating.count
            }
        });
        setMostrarProducto();
    }

    // declaracion de propiedades del useForm
    const { register, handleSubmit, formState: { errors } } = useForm();

    // función de submit del form
    const confirmarGuardar = (data) => {

    }

    if (!mostrarProducto) {
        return null
    }
    return <section className="modal-editar-producto">

        <section className="ventana-editar-producto p-4 rounded">

            <form onSubmit={handleSubmit(confirmarGuardar)}>

                <div className="row">
                    <div className="col-12">
                        <div className="text-center">
                            <h3>Editar producto</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12 my-2">

                                <label className="form-label" >Nombre</label>
                                <input {...register("nombre", { required: "Este campo es obligatorio" })}
                                    className="form-control" type="text" id="nombre"
                                    onChange={cambioDeValor} value={auxProducto.title}
                                />
                                {errors.nombre && (<p className="text-danger">{errors.nombre.message}</p>)}

                            </div>
                            <div className="col-12 my-2">

                                <label className="form-label" >Precio</label>
                                <input {...register("precio", { required: "Este campo es obligatorio" })}
                                    className="form-control" type="text" id="precio"
                                    onChange={cambioDeValor} value={auxProducto.price}
                                />
                                {errors.precio && (<p className="text-danger">{errors.precio.message}</p>)}

                            </div>
                            <div className="col-12 my-2">

                                <label className="form-label" >Categoría</label>
                                <input {...register("categoria", { required: "Este campo es obligatorio" })}
                                    className="form-control" type="text" id="categoria"
                                />
                                {errors.categoria && (<p className="text-danger">{errors.categoria.message}</p>)}

                            </div>
                            <div className="col-12 my-2">

                                <label className="form-label" >Descripción</label>
                                <textarea {...register("descripcion")} className="form-control" type="text" id="descripcion"
                                />

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12 my-2">

                                <label className="form-label" >URL de imagen de producto</label>
                                <input {...register("imagen")} className="form-control" type="text" id="imagen"
                                />
                                <section className="imagen-editar-producto d-flex justify-content-center p-3">
                                    <img className="rounded p-3" src={auxProducto.image} alt="Imagen de Producto" />
                                </section>

                            </div>
                            <div className="col-12 my-2">

                                <section className="d-flex justify-content-center">
                                    <div className="rounded p-3">
                                        <p>Ranking: {auxProducto.rating.rate} </p>
                                    </div>
                                    <div className="rounded p-3">
                                        <p>Votos: {auxProducto.rating.count} </p>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">

                        <section className="d-flex justify-content-end gap-2 mt-2">
                            <button type="submit"
                                className="boton-aceptar-editar" >Guardar Cambios</button>
                            <button className="boton-cancelar-editar" type="button"
                                onClick={reset}>Cancelar</button>
                        </section>

                    </div>
                </div>

            </form>

        </section>
    </section>
}
export default MostrarProductoModal