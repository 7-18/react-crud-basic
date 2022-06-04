import axios from "axios";

export const getProducts = async () => {
  const url = "https://jsonapi-react-basic.herokuapp.com/products";
  const response = await axios.get(url);
  return response.data;
};
