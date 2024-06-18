import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProveedorDeTareas } from './context/Peticiones';
import AgregarTarea from './components/Agregar/AgregarTarea';
import EditarTarea from './components/Editar/EditarTarea';
import VerTodasLasTareas from './components/VerTodas/VerTodasLasTareas';
import Navbar from './components/Navbar/Navbar';

const App = () => {
return (
<Router>
 <ProveedorDeTareas>
  <Navbar />
  <Routes>
   <Route path="/agregar" element={<AgregarTarea/>} />
   <Route path="/editar/:id" element={<EditarTarea/>} />
   <Route path="/ver-todas" element={<VerTodasLasTareas/>} />
   
  </Routes>
 </ProveedorDeTareas>
</Router>
);
};

export default App;