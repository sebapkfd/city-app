import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import IssueItem from "./IssueItem";
import { Issue, Tag } from "../shared/types";

const Category = () => {
  const [issues, setIssues] = useState<Issue[]>();
  const [category, setCategory] = useState<Tag | null>();
  let { id } = useParams();

  const getData = async () => {
    const response = await fetch(`http://localhost:8080/city/tags/${id}/issues`, {
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setIssues(data.issues);
    setCategory(data.tag);
  };

  useEffect(() => {
    getData();
  }, []);

  return issues && category ? (
    <div className="section">
      <h1>{category.name}</h1>
      <div className="issues-list">
        {issues?.map((issue, index) => (
          <Link to={"/" + issue.id} key={`category-issue-${index}`}>
            <IssueItem issue={issue} />
          </Link>
        ))}
      </div>
    </div>
  ) : null;
};

export default Category;