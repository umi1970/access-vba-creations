import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Index from './pages/Index';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Web from './pages/services/Web';
import Office from './pages/services/Office';
import AI from './pages/services/AI';
import Support from './pages/services/Support';
import Admin from './pages/services/Admin';
import Database from './pages/services/Database';
import Impressum from './pages/Impressum';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/web" element={<Web />} />
            <Route path="/services/office" element={<Office />} />
            <Route path="/services/ai" element={<AI />} />
            <Route path="/services/support" element={<Support />} />
            <Route path="/services/admin" element={<Admin />} />
            <Route path="/services/database" element={<Database />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
