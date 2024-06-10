type Issue = {
  id: number;
  title: string;
  pictures: string[];
  description: string;
  date: string;
  tags: number[];
};

const IssueItem = ({ issue }: { issue: Issue }) => {
  return (
    <div className="issue-item">
      <div className="issue-header">
        <div className="issue-title">
          <h2>{issue.title}</h2>
        </div>
        <small>{issue.date}</small>
      </div>
      <div className="issue-picture">
        <img src={issue.pictures[0]} />
      </div>
    </div>
  );
};

export default IssueItem;
