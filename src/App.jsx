import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#050505] text-[#F5F5F5] font-sans bg-noise overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
