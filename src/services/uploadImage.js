const API_KEY = import.meta.env.VITE_IMGBB_API_KEY;

export const uploadImage = async (file) => {
  if (!API_KEY) {
    throw new Error("Falta configurar la API Key de ImgBB");
  }

  const formData = new FormData();

  formData.append("image", file);

  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${API_KEY}`,
    {
      method: "POST",
      body: formData
    }
  );

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error("Error al subir la imagen");
  }

  return data.data.url;
};