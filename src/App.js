import Navbar from "./components/Navbar";
import { LandingPageIndex } from "./pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <LandingPageIndex />
    </div>
  );
}

export default App;
