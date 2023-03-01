import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/about' element={< About />}></Route>
          <Route path='/contact' element={< Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;

