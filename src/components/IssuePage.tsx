import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

type Issue = {
  id: number;
  title: string;
  pictures: string[];
  description: string;
  date: string;
  location: string;
};

const IssuePage = () => {
  const [data, setData] = useState<Issue | null>(null);
  let { id } = useParams();

  const getData = async () => {
    const response = await fetch(
      "http://localhost:5173/src/assets/dummy-issues.json",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    let value: Issue[] = data.filter(
      (issue: Issue) => id && issue.id == parseInt(id)
    );

    setData(value[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return data ? (
    <div>
      <Link to={"/"}>
        <button>Volver a Home</button>
      </Link>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      {data.pictures.map((pic, i) => (
        <img src={pic} key={data.title + "-" + i} />
      ))}
      <div>
        <p>{data.description}</p>
        <p>{data.location}</p>
      </div>
    </div>
  ) : null;
};

export default IssuePage;
