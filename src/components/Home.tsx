import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Issue = {
  id: number;
  title: string;
  pictures: string[];
  description: string;
  date: string;
};

const Home = () => {
  const [issues, setIssues] = useState<Issue[]>();
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
    setIssues(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div>
        {issues?.map((issue, index) => (
          <div key={`issue-${index}`}>
            <Link to={"/" + issue.id} color="cyan">
              <h2>{issue.title}</h2>
              <img src={issue.pictures[0]} />
              <p>{issue.date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
