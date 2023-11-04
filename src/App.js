import './App.css'
import Home from './PortfolioContainer/Home/Home'
import About from './PortfolioContainer/AboutMe/About'
import Contact from './PortfolioContainer/ContactMe/Contact';
import Footer from "./PortfolioContainer/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
