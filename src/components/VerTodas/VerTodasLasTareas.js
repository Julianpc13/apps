
import React, { useContext, useState, useEffect } from 'react';
import { TareasContext } from '../../context/Peticiones';
import { Link } from 'react-router-dom';

const VerTodasLasTareas = () => {
    const { tareas, eliminarTarea } = useContext(TareasContext);
    const [tareasSeleccionadas, setTareasSeleccionadas] = useState([]);
    const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

    useEffect(() => {
        setTareasSeleccionadas(tareas.map(tarea => tarea.id));
    }, [tareas]);

    const handleEliminarTarea = (id) => {
        eliminarTarea(id);
    };

    const handleSeleccionarTarea = (id) => {
        setTareaSeleccionada(id);
    };

    return (
        <div>
        <h2>Ver Todas las Tareas</h2>
        {tareas.length === 0 ? (
        <p>Cargando...</p>
        ) : (
        <div>
        <ul>
        {tareas.map((tarea) => (
        <li key={tarea.id}>
        {tarea.nombre} - {tarea.descripcion}
        <button onClick={() => handleEliminarTarea(tarea.id)}>Eliminar</button>
        <button onClick={() => handleSeleccionarTarea(tarea.id)}>Seleccionar</button>
        </li>
        ))}
        </ul>
        {tareasSeleccionadas.length > 0 && tareaSeleccionada && (
        <Link to={`/editar/${tareaSeleccionada}`}>Editar Tarea Seleccionada</Link>
        )}
        </div>
        )}
        </div>
        );
        };

export default VerTodasLasTareas;