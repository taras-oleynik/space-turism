import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Destanation from "./components/Destenation";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function NoPage() {
  return <h1 style={{ color: "black" }}>Not existing page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="destanation" element={<Destanation />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
