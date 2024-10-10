import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IssueItem from "./IssueItem";
import { IssueInfo } from "../shared/types";

const Home = () => {
  const [issues, setIssues] = useState<IssueInfo[]>();

  const getData = async () => {
    const response = await fetch("http://localhost:8080/city/issues", {
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setIssues(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="section">
      <h1>Home</h1>
      <div className="issues-list">
        {issues?.map((issue, index) => (
          <Link to={"/" + issue.id} key={`issue-${index}`}>
            <IssueItem issue={issue} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;