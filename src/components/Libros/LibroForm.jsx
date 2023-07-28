import {React, useState, useEffect} from "react";
import * as librosService from './LibroService';
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const LibroForm = () => {

  const navigate = useNavigate();
  const params = useParams();


  const [libro, setLibro] = useState({
    titulo: '',
    autor: '',
    descripcion: ''
    })

    const handleInputChange = (event) => {
      setLibro({
        ...libro,
        [event.target.name] : event.target.value
      })
    }

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (!params.id) {
        await librosService.createLibro(libro);
        toast.success('Libro agregado correctamente');
      }else{
        await librosService.updateLibro(params.id, libro);
        toast.success('Libro actualizado correctamente');
      }
      
      navigate('/');

    }

    const getLibro = async (id) => {
      const res = await librosService.getLibro(id);
      const {titulo, autor, descripcion} = res.data;
      setLibro({titulo, autor, descripcion});
    }

    useEffect(() => {
      if(params.id){
        getLibro(params.id);
      }
    }, [params.id])
    



  return (
    <div className="row">
      <div className="cold-md-4 ">
        <div className="card">
          <div className="card-body">
            <h3>nuevo libro</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group p-4">
                <input
                  type="text"
                  name="titulo"
                  placeholder="escribe el titulo"
                  className="form-control"
                  autoFocus
                  onChange={handleInputChange}
                  value={libro.titulo}
                />
              </div>
              <div className="form-group p-4">
                <input
                  type="text"
                  name="autor"
                  placeholder="escribe el autor"
                  className="form-control"
                  onChange={handleInputChange}
                  value={libro.autor}
                />
              </div>
              <div className="form-group p-4">
                <textarea
                  name="descripcion"
                  rows="3"
                  className="form-control"
                  placeholder="escribe la descripcion"
                  onChange={handleInputChange}
                  value={libro.descripcion}
                ></textarea>
              </div>

              {
                params.id ? (
                  <button className="btn btn-info">Actualizar libro</button>
                ) : (
                  <button className="btn btn-primary">Agregar libro</button>
                )
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibroForm;
