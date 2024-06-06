import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IssueItem from "./IssueItem";

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
    <div className="home">
      <h1>Home</h1>
      <div className="issues-list">
        
        {issues?.map((issue, index) => (
          <Link to={"/" + issue.id}>
            <IssueItem issue={issue} key={`issue-${index}`} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
