import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type Issue = {
  id: number;
  title: string;
  pictures: string[];
  description: string;
  date: string;
  location: string;
  tags: number[];
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
      (issue: Issue) => id && issue.id === parseInt(id)
    );

    setData(value[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return data ? (
    <div className="issue-page">
      <div className="first-column">
        <img src={data.pictures[0]} alt={data.title} />
        <p>{data.description}</p>
        {data.pictures.map((pic, index) => (
          <img src={pic} alt={`${data.title}-${index}`} />
        ))}
      </div>
      <div className="second-column">
        <p className="issue-page-date">{data.date}</p>
        <h1 className="issue-page-title">{data.title}</h1>
        <p className="issue-page-location">{data.location}</p>
        {data.tags.map((tag, index) => (
          <p key={`tag-${index}`}>{tag}</p>
        ))}
      </div>
    </div>
  ) : null;
};

export default IssuePage;
