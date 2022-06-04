import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [data, setData] = useState(initialState);

  const handleChange = ({ target }) =>
    setData({
      ...data,
      [target.name]: target.value,
    });

  const uploadImg = (url) =>
    setData({
      ...data,
      image: url,
    });

  return [data, handleChange, uploadImg];
};
