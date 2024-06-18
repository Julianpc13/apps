
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <nav>
        <div className={`menu ${menuAbierto ? 'abierto' : ''}`}>
          <div className="menu-icon" onClick={toggleMenu}>
           <div className="bar"></div>
           <div className="bar"></div>
           <div className="bar"></div>
          </div>
        <ul>
        <li>
          <Link to="/agregar" onClick={toggleMenu}>
        Agregar Tarea
          </Link>
        </li>
        <li>
          <Link to="/ver-todas" onClick={toggleMenu}>
        Ver Todas las Tareas
          </Link>
        </li>
        <li>
          <Link to="/editar/1" onClick={toggleMenu}>
        Editar Tarea
          </Link>
        </li>
        </ul>
        </div>
        </nav>
        );
        };
        

export default Navbar;