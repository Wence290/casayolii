import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductForm from "../productForm/ProductForm";
import { uploadImage } from "../../services/uploadImage";
import { createProduct } from "../../services/productService";

function ProductFormContainer() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    color: "",
    stock: ""
  });

  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null);
  };

  const validate = () => {
    const newErrors = {};

    if (!product.nombre.trim()) {
      newErrors.nombre = "Ingresá un nombre.";
    }

    if (!product.descripcion.trim()) {
      newErrors.descripcion = "Ingresá una descripción.";
    }

    if (!product.color.trim()) {
      newErrors.color = "Ingresá un color.";
    }

    if (!product.precio || Number(product.precio) <= 0) {
      newErrors.precio = "Ingresá un precio válido.";
    }

    if (
      product.stock === "" ||
      !Number.isInteger(Number(product.stock)) ||
      Number(product.stock) < 0
    ) {
      newErrors.stock = "Ingresá un stock válido.";
    }

    if (!file) {
      newErrors.imagen = "Seleccioná una imagen.";
    } else if (!file.type.startsWith("image/")) {
      newErrors.imagen = "Seleccioná un archivo de imagen válido.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      const imageUrl = await uploadImage(file);

      const newProduct = {
        ...product,
        precio: Number(product.precio),
        stock: Number(product.stock),
        imagen: imageUrl
      };

      const id = await createProduct(newProduct);

      navigate(`/admin/products/success/${id}`);

    } catch (error) {
      setErrors({
        general: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductForm
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
}

export default ProductFormContainer;