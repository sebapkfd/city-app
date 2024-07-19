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

type Tag = {
  id: number;
  name: string;
};

const Category = () => {
  const [issues, setIssues] = useState<Issue[]>();
  const [category, setCategory] = useState<Tag | null>();
  let { id } = useParams();

  const getData = async () => {
    // This fetch uses 2 dots before url, dont really like this, but it works
    const tagsResponse = await fetch("../tags.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    }
    );
    const tagsData = await tagsResponse.json();
    let tag: Tag = tagsData.filter((tag: Tag) => id && tag.id === parseInt(id))[0];

    // This fetch uses 2 dots before url, dont really like this, but it works
    const IssuesResponse = await fetch("../dummy-issues.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    }
    );
    const IssuesData = await IssuesResponse.json();
    let filteredIssues: Issue[] = IssuesData.filter(
      (issue: Issue) => id && issue.tags.includes(tag.id)
    );

    setIssues(filteredIssues);
    setCategory(tag);

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