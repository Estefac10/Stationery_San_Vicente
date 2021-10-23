import axios from "axios";
import { Path } from "../config";

export function getProducts() {
  return axios.get(`${Path.url}/products`);
}

export function getProduct(id) {
  return axios.get(`${Path.url}/products/${id}`);
}

export function setProduct(producto) {
  if (producto._id === "new") {
    //producto.id = Date.now();
    //Productos.push(producto);
    delete producto._id;
    return axios.post(`${Path.url}/products`, producto);
  } else if (producto._id) {
    //let index = Productos.findIndex((res) => res.id === producto.id);
    //Productos[index] = producto;
    return axios.put(`${Path.url}/products/${producto._id}`, producto);
  }
}

export function deleteProduct(id) {
  if (id !== undefined) {
    /*if (Productos.findIndex((producto) => producto.id === id) >= 0) {
      const productosActualizados = Productos.filter(
        (producto) => producto.id !== id
      );
      Productos = productosActualizados;
      return true;
    }*/
    return axios.delete(`${Path.url}/products/${id}`);
  }
}
