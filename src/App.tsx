import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Learn from './pages/Learn';
import LessonDetail from './pages/LessonDetail';
import Safety from './pages/Safety';
import Manage from './pages/Manage';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HashRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-(--bg-color) text-(--text-color) transition-colors duration-300">
            <Navbar />
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/learn/:id" element={<LessonDetail />} />
                <Route path="/safety" element={<Safety />} />
                <Route path="/manage" element={<Manage />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
