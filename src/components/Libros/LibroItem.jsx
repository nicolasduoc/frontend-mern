import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteLibro } from "./LibroService";

const LibroItem = ({ libro, loadLibros }) => {

const navigate = useNavigate();

  const handleDelete = async (id) => {
    await deleteLibro(id);
    loadLibros();
  };

  return (
    <div className="col-md-4 p-4">
      <div className="card card-body" style={{cursor: 'pointer'}} >
        <div className="d-flex justify-content-between">
          <h1 onClick={() => navigate(`/update/${libro._id}`) }> {libro.titulo} </h1>
          <span className="text-danger" onClick={() => handleDelete(libro._id)}>X</span>
        </div> 
        <p> {libro.autor} </p>
        <p> {libro.descripcion} </p>
      </div>
    </div>
  );
};

export default LibroItem;
