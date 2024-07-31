import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tag } from "../shared/types";

const Tags = ({ tags }: { tags: number[] }) => {
  const [categories, setCategories] = useState<Tag[]>([]);

  const getData = async () => {
    const response = await fetch("./tags.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    }
    );

    const data = await response.json();

    if (tags[0] !== -1) {
      let values: Tag[] = data.filter(
        (category: Tag) => category.id && tags.includes(category.id)
      );
      setCategories(values);
    }
    else {
      setCategories(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return categories.length > 0 ? (
    <div className="issue-page-tags">
      {categories.map((cat, index) => (
        <Link to={"/categories/" + cat.id} key={`tag-${index}`}>
          <p className={"issue-page-tag"} >{cat.name}</p>
        </Link>
      ))}
    </div>
  ) : null;

}

export default Tags;