import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Legends from "./pages/legends";
import Create from "./pages/create";
import Contact from "./pages/contact";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
      <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="legends" element={<Legends />} />
          <Route path="create" element={<Create />} />
          <Route path="contact" element={<Contact />} /> 
      </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
