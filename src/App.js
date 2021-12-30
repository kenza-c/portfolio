import Navbar from "./components/navbar";
import Home from "./components/home";
import './css/global.css';
import About from "./components/about";
import Experience from "./components/experience";
import Contact from "./components/contacts";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;
