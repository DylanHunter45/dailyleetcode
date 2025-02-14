import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Daily from "./pages/Daily";
import RandomProblem from "./pages/RandomProblem";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/daily" element={<Daily />}></Route>
        <Route path="/random" element={<RandomProblem />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
