function ProductForm({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit
}) {
  return (
    <section className="product-form">
      <h2>Agregar producto</h2>

      <form onSubmit={onSubmit} noValidate>
        <div>
          <label>Nombre del producto</label>

          <input
            type="text"
            name="nombre"
            value={product.nombre}
            onChange={onChange}
          />

          {errors.nombre && <p>{errors.nombre}</p>}
        </div>

        <div>
          <label>Descripción</label>

          <textarea
            name="descripcion"
            value={product.descripcion}
            onChange={onChange}
          />

          {errors.descripcion && <p>{errors.descripcion}</p>}
        </div>

        <div>
          <label>Precio</label>

          <input
            type="number"
            name="precio"
            value={product.precio}
            onChange={onChange}
          />

          {errors.precio && <p>{errors.precio}</p>}
        </div>

        <div>
          <label>Color</label>

          <input
            type="text"
            name="color"
            value={product.color}
            onChange={onChange}
          />

          {errors.color && <p>{errors.color}</p>}
        </div>

        <div>
          <label>Stock</label>

          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={onChange}
          />

          {errors.stock && <p>{errors.stock}</p>}
        </div>

        <div>
          <label>Imagen del producto</label>

          <input
            type="file"
            accept="image/*"
            onChange={onFileChange}
          />

          {errors.imagen && <p>{errors.imagen}</p>}
        </div>

        {errors.general && <p>{errors.general}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar producto"}
        </button>
      </form>
    </section>
  );
}

export default ProductForm;