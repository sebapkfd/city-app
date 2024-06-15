import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Tag = {
  id: number;
  name: string;
};

const Tags = ({ tags }: { tags: number[] }) => {
  const [categories, setCategories] = useState<Tag[]>([]);

  const getData = async () => {
    const response = await fetch(
      "http://localhost:5173/src/assets/tags.json",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();

    let values: Tag[] = data.filter(
      (category: Tag) => category.id && tags.includes(category.id)
    );

    setCategories(values);
  };

  useEffect(() => {
    getData();
  }, []);

  return categories.length > 0 ? (
    <div className="issue-page-tags">
      {categories.map((cat, index) => (
        <Link to={"/categories/" + cat.id}>
          <p className={"issue-page-tag"} key={`tag-${index}`}>{cat.name}</p>
        </Link>
      ))
      }
    </div>
  ) : null

}

export default Tags;