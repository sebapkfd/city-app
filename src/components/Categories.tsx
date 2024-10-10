import { useEffect, useState } from "react";
import Tags from "./Tags";
import { Tag } from "../shared/types";

const Categories = () => {
  const [categories, setCategories] = useState<Tag[]>([]);

  const getData = async () => {
    const response = await fetch("http://localhost:8080/city/tags", {
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="section">
      <h1>Categorías</h1>
      <div className="main-column">
        <Tags tags={categories} />
      </div>

    </div>
  );
};

export default Categories;