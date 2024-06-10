import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import IssueItem from "./IssueItem";

type Issue = {
  id: number;
  title: string;
  pictures: string[];
  description: string;
  date: string;
  tags: number[];
};

const Category = () => {
  const [issues, setIssues] = useState<Issue[] | null>(null);
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
    // console.log(data);

    let filteredIssues: Issue[] = data.filter(
      (issue: Issue) => id && issue.tags.includes(parseInt(id))
    );
    console.log(filteredIssues);

    setIssues(filteredIssues);
  };

  useEffect(() => {
    getData();
  }, []);

  return issues ? (
    <div className="home">
      <h1>Category</h1>
      <div className="issues-list">
        {issues?.map((issue, index) => (
          <Link to={"/" + issue.id}>
            <IssueItem issue={issue} key={`issue-${index}`} />
          </Link>
        ))}
      </div>
    </div>
  ) : null;
};

export default Category;
