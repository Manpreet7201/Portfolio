import './App.css';
import HomePage from './Pages/HomePage';
import AboutContent from './Components/About';
import SkillsContent from './Components/Skills';
import ExperienceContent from './Components/ExperienceContent';
import ContactContent from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutContent />} />
          <Route path="/skills" element={<SkillsContent />} />
          <Route path="/experience" element={<ExperienceContent />} />
          <Route path="/contact" element={<ContactContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


