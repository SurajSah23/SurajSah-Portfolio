import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import ImageExplorer from './components/ImageExplorer';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css'; 
import Projects from './components/Projects';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <About />
            <Skills />
            <Projects />
            <ImageExplorer />
            <Resume />
            <Contact />
            
        </div>
    );
};

export default App;
