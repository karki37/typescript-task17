import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Navigation from "./components/navigation";

function App() {
  return (
    <>
      <div>
        <Header />
        <Navigation />
        <Home />
        <About />
        <Contact />
        <Footer /> 
      </div>
    </>
  );
}

export default App;