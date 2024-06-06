import { Link } from "react-router-dom";

type Issue = {
  id: number;
  title: string;
  pictures: string[];
  description: string;
  date: string;
};

const IssueItem = ({ issue }: { issue: Issue }) => {
  return (
    <div className="issue-item">
      <Link to={"/" + issue.id} >
        <p>{issue.date}</p>
        <h2>{issue.title}</h2>
        <div>
          <img src={issue.pictures[0]} />
        </div>

      </Link>
    </div>
  )

}

export default IssueItem;