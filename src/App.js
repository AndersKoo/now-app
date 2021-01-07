import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Movie from "./components/Movies/Movies";
import Show from "./components/show/show";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Movie />
      <Show />
    </div>
  );
}

export default App;
