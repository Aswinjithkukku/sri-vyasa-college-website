import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { LandingPageIndex } from "./pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <LandingPageIndex />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
