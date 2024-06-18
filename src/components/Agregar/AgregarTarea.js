// src/components/Agregar/AgregarTarea.js
import React, { useContext, useState } from 'react';
import { TareasContext } from '../../context/Peticiones';

const AgregarTarea = () => {
    const { agregarTarea } = useContext(TareasContext);
    const [nuevaTarea, setNuevaTarea] = useState({ nombre: '', descripcion: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevaTarea((prevTarea) => ({
            ...prevTarea,
            [name]: value,
        }));
    };

    const handleAgregarTarea = () => {
        if (nuevaTarea.nombre.trim() === '' || nuevaTarea.descripcion.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }
        agregarTarea({
            id: Date.now(),
            ...nuevaTarea,
        });
        setNuevaTarea({ nombre: '', descripcion: '' });
    };

    return (
        <div>
            <h2>Agregar Tarea</h2>
            <form>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={nuevaTarea.nombre} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Descripción:
                    <textarea name="descripcion" value={nuevaTarea.descripcion} onChange={handleInputChange}></textarea>
                </label>
                <br />
                <button type="button" onClick={handleAgregarTarea}>Agregar Tarea</button>
            </form>
        </div>
    );
};

export default AgregarTarea;