import { Route, Routes } from "react-router-dom";
import "./App.css";
import IssuePage from "./components/IssuePage";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<IssuePage />}/>
      </Routes>
    </div>
  );
}

export default App;
