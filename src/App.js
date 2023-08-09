
import Main from "./Components/Main"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/Footer/About";
import Navbar from "./Components/NavBar/Navbar";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Main />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}



export default App;
