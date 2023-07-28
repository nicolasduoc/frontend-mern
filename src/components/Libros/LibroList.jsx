import {React, useEffect, useState} from 'react'
import * as libroService from './LibroService'
import LibroItem from './LibroItem'

const LibroList = () => {

  const [libros, setLibros] = useState([])

  const getLibros = async () => {
    const res = await libroService.getLibros()
    setLibros(res.data)
  }


  useEffect(() => {
    getLibros()
  }, [])
  

  return (
    <div className='row'>
      {
        libros.map((libro) => (
            <LibroItem libro={libro} key={libro._id} loadLibros={getLibros}/>
        ))
      }
    </div>
  )
}

export default LibroList;