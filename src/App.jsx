import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#f7f9fa] text-[#1f3038] font-sans overflow-x-hidden selection:bg-[#0d7480]/20 selection:text-[#0d7480]">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
