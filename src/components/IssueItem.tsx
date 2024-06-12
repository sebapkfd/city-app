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
      <div className="issue-picture">
        <img src={"http://localhost:5173/" + issue.pictures[0]} />
      </div>
      <div className="issue-title">
        <h2>{issue.title}</h2>
        <p>{issue.date}</p>
      </div>
    </div>
  );
};

export default IssueItem;
