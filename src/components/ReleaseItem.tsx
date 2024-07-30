type Release = {
  id: number;
  title: string;
  content: string;
  date: string;
};

const ReleaseItem = ({ release }: { release: Release }) => {
  return (
    <div className="releases-item">
      <div className="releases-item-info">
        <h2>{release.title}</h2>
        <p className="releases-item-content">{release.content}</p>
        <p>{release.date}</p>
      </div>
    </div>
  );
};

export default ReleaseItem;