import { useState } from "react"
import { useForm } from "react-hook-form";

function MostrarProductoModal({ producto, mostrarProducto, setMostrarProducto }) {

    const initialValue = {
        title: producto.title,
        price: producto.price,
        category: producto.category,
        description: producto.description,
        image: producto.image,
        rating: {
            rate: producto.rating.rate,
            count: producto.rating.count
        }
    };

    const [nuevoProducto, setNuevoProducto] = useState(initialValue);

    const cambioDeValor = (e) => {
        switch (e.target.id) {
            case "nombre":
                setNuevoProducto({
                    title: e.target.value,
                    price: nuevoProducto.price,
                    category: nuevoProducto.category,
                    description: nuevoProducto.description,
                    image: nuevoProducto.image,
                    rating: {
                        rate: nuevoProducto.rating.rate,
                        count: nuevoProducto.rating.count
                    }
                });
                break;
            case "precio":
                setNuevoProducto({
                    title: nuevoProducto.title,
                    price: e.target.value,
                    category: nuevoProducto.category,
                    description: nuevoProducto.description,
                    image: nuevoProducto.image,
                    rating: {
                        rate: nuevoProducto.rating.rate,
                        count: nuevoProducto.rating.count
                    }
                });
                break;
            case "categoria":
                setNuevoProducto({
                    title: nuevoProducto.title,
                    price: nuevoProducto.price,
                    category: e.target.value,
                    description: nuevoProducto.description,
                    image: nuevoProducto.image,
                    rating: {
                        rate: nuevoProducto.rating.rate,
                        count: nuevoProducto.rating.count
                    }
                });
                break;
            case "descripcion":
                setNuevoProducto({
                    title: nuevoProducto.title,
                    price: nuevoProducto.price,
                    category: nuevoProducto.category,
                    description: e.target.value,
                    image: nuevoProducto.image,
                    rating: {
                        rate: nuevoProducto.rating.rate,
                        count: nuevoProducto.rating.count
                    }
                });
                break;
            case "imagen":
                setNuevoProducto({
                    title: nuevoProducto.title,
                    price: nuevoProducto.price,
                    category: nuevoProducto.category,
                    description: nuevoProducto.description,
                    image: e.target.value,
                    rating: {
                        rate: nuevoProducto.rating.rate,
                        count: nuevoProducto.rating.count
                    }
                });
                break;
            default:
                break;
        }
    }

    const resetRanking = () => {
        setNuevoProducto({
            title: nuevoProducto.title,
            price: nuevoProducto.price,
            category: nuevoProducto.category,
            description: nuevoProducto.description,
            image: nuevoProducto.image,
            rating: {
                rate: 0,
                count: 0
            }
        })
    }

    const reset = () => {
        setNuevoProducto(initialValue);
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

        <section className="ventana-editar-producto p-2 rounded">

            <form onSubmit={handleSubmit(confirmarGuardar)}>

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

                                <label className="form-label" >Nombre</label>
                                <input {...register("nombre", { required: "Este campo es obligatorio" })}
                                    className="form-control form-control-sm" type="text" id="nombre"
                                    onChange={cambioDeValor} value={nuevoProducto.title}
                                />
                                {errors.nombre && (<p className="text-danger">{errors.nombre.message}</p>)}

                            </div>
                            <div className="col-12 my-2">

                                <label className="form-label" >Precio</label>
                                <input {...register("precio", { required: "Este campo es obligatorio" })}
                                    className="form-control form-control-sm" type="text" id="precio"
                                    onChange={cambioDeValor} value={nuevoProducto.price}
                                />
                                {errors.precio && (<p className="text-danger">{errors.precio.message}</p>)}

                            </div>
                            <div className="col-12 my-2">

                                <label className="form-label" >Categoría</label>
                                <input {...register("categoria", { required: "Este campo es obligatorio" })}
                                    className="form-control form-control-sm" type="text" id="categoria"
                                    onChange={cambioDeValor} value={nuevoProducto.category}
                                />
                                {errors.categoria && (<p className="text-danger">{errors.categoria.message}</p>)}

                            </div>
                            <div className="col-12 my-2">

                                <label className="form-label" >Descripción</label>
                                <textarea {...register("descripcion")} className="form-control form-control-sm"
                                    type="text" id="descripcion" onChange={cambioDeValor}
                                    value={nuevoProducto.description}
                                />

                            </div>
                            <div className="col-12 my-2">

                                <section className="d-flex flex-column border border-black rounded">
                                    <section className="d-flex justify-content-center">
                                        <div className="rounded p-2">
                                            <p>Ranking: {nuevoProducto.rating.rate} </p>
                                        </div>
                                        <div className="rounded p-2">
                                            <p>Votos: {nuevoProducto.rating.count} </p>
                                        </div>
                                    </section>
                                    <div className="d-grid p-2">
                                        <button className="boton-aceptar-editar" type="button"
                                            onClick={resetRanking}>Formatear rating</button>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12 my-2">

                                <label className="form-label" >URL de imagen de producto</label>
                                <input {...register("imagen")} className="form-control form-control-sm"
                                    type="text" id="imagen" onChange={cambioDeValor}
                                    value={nuevoProducto.image}
                                />
                                <section className="imagen-editar-producto d-flex justify-content-center p-2">
                                    <img className="rounded p-2" src={nuevoProducto.image} alt="Imagen de Producto" />
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">

                        <section className="d-flex justify-content-end gap-2 mb-2">
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