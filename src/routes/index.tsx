import { Routes, Route, Navigate } from 'react-router-dom';

export const AppRoutes = () => {

     return (
                <Routes>
                    <Route path="/pagina-inicial" element={<div>Página Inicial</div>} />
                    <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
                </Routes>
     ); 
}