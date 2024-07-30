import { Route, Routes } from "react-router-dom";
import "./App.css";
import IssuePage from "./components/IssuePage";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Category from "./components/Category";
import Releases from "./components/Releases";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/categories/:id" element={<Category />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/:id" element={<IssuePage />} />
      </Routes>
    </div>
  );
}

export default App;
