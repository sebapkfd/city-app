import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Tag = {
  id: number;
  name: string;
};

const Categories = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  const getData = async () => {
    const response = await fetch("http://localhost:5173/src/assets/tags.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setTags(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="categories">
      <h1>Categorías</h1>
      <ul>
        {tags?.map((tag, index) => (
          <li key={tag.name + "-" + index}>
            <Link to={"/categories/" + tag.id}>
            {tag.name}
            </Link>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
