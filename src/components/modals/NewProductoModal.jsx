import { useState } from "react";
import { useForm } from "react-hook-form"

function NewProductModal({ show, onClose }) {

    // Declaración de propiedades de useForm
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
        return <div className="modal-nuevo-producto">
            <div className="ventana-nuevo-producto row p-3 rounded">
                <form onSubmit={handleSubmit(cargarProducto)} noValidate>
                    <div className="col-12 my-2">
                        <div className="row">
                            <div className="col-12 col-md-6" >
                                <label className="form-label">Nombre</label>
                                <input className="form-control" id="nombre"
                                    {...register("nombre", { required: "Este campo es obligatorio" })} />
                            </div>
                            <div className="col-12 col-md-6" >
                                <label className="form-label">Categoría</label>
                                <input className="form-control" id="categoria"
                                    {...register("categoria", { required: "Este campo es obligatorio" })} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2">
                        <label className="form-label">Precio</label>
                        <input className="form-control" id="precio"
                            {...register("precio", { required: "Este campo es obligatorio" })} />
                    </div>
                    <div className="col-12 my-2">
                        <label className="form-label">Descripción</label>
                        <textarea className="form-control" id="descripcion" {...register("descripcion")} />
                    </div>
                    <div className="col-12 my-2">
                        <label className="form-label">Url de Imagen</label>
                        <input className="form-control" id="imagen" {...register("imagen")}
                            onChange={setProductImage} />
                        <img src={image} alt="imagen_de_producto" />
                    </div>
                    <div className="col-12 d-flex gap-2 justify-content-end my-2">
                        <button className="aceptar-nuevo-producto p-2" type="submit">Crear Producto</button>
                        <button className="cancelar-nuevo-producto p-2" type="button" onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    }
}
export default NewProductModal