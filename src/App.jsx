import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import About from "./components/About";
// import Header from "./components/Header";
// import Home from "./components/Home";
import { About, Header, Home, Studies } from "./components/Index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/studies" element={<Studies />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
