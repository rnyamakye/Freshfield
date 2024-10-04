import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <header className="flex justify-center ">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
