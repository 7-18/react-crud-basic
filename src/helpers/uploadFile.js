export const uploadFile = async (file) => {
  const cloud_url = "https://api.cloudinary.com/v1_1/divjxvhtz/upload";
  const formData = new FormData();
  formData.append("upload_preset", "CRUD-heroku");
  formData.append("file", file);

  const response = await fetch(cloud_url, {
    method: "POST",
    body: formData,
  });

  const cloudResponse = await response.json();
  return cloudResponse.secure_url;
};
