import { IssueInfo } from "../shared/types";

const IssueItem = ({ issue }: { issue: IssueInfo }) => {
  return (
    <div className="issue-item">
      <div className="issue-item-picture">
        <img src={issue.pictures[0]} />
      </div>
      <div className="issue-item-info">
        <h2>{issue.title}</h2>
        <p>{issue.date}</p>
      </div>
    </div>
  );
};

export default IssueItem;