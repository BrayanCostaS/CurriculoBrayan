import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MyWebsite from './components/MyWebsite'; // Importando o componente adicional
import "./styles/components/app.sass";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para o layout com Header e Sidebar */}
        <Route path="/" element={<Layout />} />

        {/* Rota para o MyWebsite sem Header e Sidebar */}
        <Route path="/MyWebsite" element={<MyWebsite />} />
      </Routes>
    </Router>
  );
}

export default App;