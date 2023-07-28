import axios from "axios";

export const getLibros = async () => {
  return await axios.get("http://localhost:4000/libros");
}

export const createLibro = async (libro) => {
  return await axios.post("http://localhost:4000/libros", libro);
}

export const getLibro = async (id) => {
  return await axios.get(`http://localhost:4000/libros/${id}`);
}

export const updateLibro = async (id, libro) => {
  return await axios.put(`http://localhost:4000/libros/${id}`, libro);
}

export const deleteLibro = async (id) => {
  return await axios.delete(`http://localhost:4000/libros/${id}`);
}