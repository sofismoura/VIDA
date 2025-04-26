import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <Routes>
        <Route path="/" element={<h1 className="text-3xl font-bold">Bem-vindo ao VIDA! 🚀</h1>} />
        {/* Outras rotas serão adicionadas aqui depois */}
      </Routes>
    </div>
  );
}

export default App;
