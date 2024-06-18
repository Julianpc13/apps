import { createContext, useState } from 'react';

const TareasContext = createContext();

const ProveedorDeTareas = ({ children }) => {
    const tareasIniciales = [
        { id: 1, nombre: 'Jugar a la compu', descripcion: 'Mucha mucha mucha compu.' },
        { id: 2, nombre: 'Estudiar Matematica', descripcion: 'Parabolas y rectas importantes.' },
        { id: 3, nombre: 'Ir a Colombia', descripcion: 'Llegar a Colombia vivo.' },
    ];

    const [tareas, setTareas] = useState(tareasIniciales);

    const agregarTarea = (nuevaTarea) => {
        setTareas([...tareas, nuevaTarea]);
    };

    const eliminarTarea = (id) => {
        const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
        setTareas(nuevasTareas);
    };

    const editarTarea = (id, nuevaTarea) => {
        const nuevasTareas = tareas.map((tarea) =>
            tarea.id === id ? { ...tarea, ...nuevaTarea } : tarea
        );
        setTareas(nuevasTareas);
    };

    return (
        <TareasContext.Provider value={{ tareas, agregarTarea, eliminarTarea, editarTarea }}>
            {children}
        </TareasContext.Provider>
    );
};

export { ProveedorDeTareas, TareasContext };