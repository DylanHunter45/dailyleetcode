import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Daily from "./pages/Daily";

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <Daily />
      <Footer />
    </div>
  );
}

export default App;
