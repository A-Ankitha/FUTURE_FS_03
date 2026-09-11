import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider } from './context/ThemeContext';

import Home from './pages/Home';
import MenuPage from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Visit from './pages/Visit';
import Contact from './pages/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {loading && (
        <LoadingScreen onComplete={() => setLoading(false)} />
      )}

      <BrowserRouter>
        <div className="site-shell">
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/visit" element={<Visit />} />
              <Route path="/contact" element={<Contact />} />

              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}