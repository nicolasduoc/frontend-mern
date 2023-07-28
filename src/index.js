import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import LibroList from './components/Libros/LibroList';
import LibroForm from './components/Libros/LibroForm';
import "bootswatch/dist/lux/bootstrap.min.css";
import './index.css';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Navbar />
      <div className="container p-4 ">
        <Routes>
          <Route exact path="/" element={<LibroList />} />
          <Route path="/new-libro" element={<LibroForm />} />
          <Route path="/update/:id" element={<LibroForm />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

