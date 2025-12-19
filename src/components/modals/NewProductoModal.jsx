import { useState } from "react";
import { useForm } from "react-hook-form"

function NewProductModal({ show, onClose }) {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [image, setImage] = useState("");

    const setProductImage = (e) => {
        setImage(e.target.value);
    }

    const [mensaje, setMensaje] = useState(false);

    const cargarProducto = (data) => {
        onClose();
    }

    if (!show) {
        return null
    }
    else {
        return <div className="Nuevo-producto-fondo">
            <div className="Nuevo-producto-contenedor">
                <form onSubmit={handleSubmit(cargarProducto)} noValidate>
                    <div className="">
                        <label className="form-text">Nombre</label>
                        <input className="form-control" id="nombre"
                            {...register("nombre", { required: "Este campo es obligatorio" })} ></input>
                    </div>
                    <div className="">
                        <label className="form-text">Categoría</label>
                        <input className="form-control" id="categoria"
                            {...register("categoria", { required: "Este campo es obligatorio" })} ></input>
                    </div>
                    <div className="">
                        <label className="form-text">Precio</label>
                        <input className="form-control" id="precio"
                            {...register("precio", { required: "Este campo es obligatorio" })} ></input>
                    </div>
                    <div className="">
                        <label className="form-text">Descripción</label>
                        <input className="form-control" id="descripcion" {...register("descripcion")} ></input>
                    </div>
                    <div className="">
                        <label className="form-text">Url de Imagen</label>
                        <input className="form-control" id="imagen" {...register("imagen")}
                            onChange={setProductImage}></input>
                        <img src={image} alt="imagen_de_producto" />
                    </div>
                    <div className="d-flex Nuevo-producto-footer gap-2 justify-content-end">
                        <button type="submit">Crear Producto</button>
                        <button type="button" onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    }
}
export default NewProductModal