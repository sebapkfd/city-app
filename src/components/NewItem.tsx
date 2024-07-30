type New = {
  id: number;
  title: string;
  content: string;
  date: string;
};

const NewItem = ({ item }: { item: New }) => {
  return (
    <div className="news-item">
      <div className="news-item-info">
        <h2>{item.title}</h2>
        <p className="news-item-content">{item.content}</p>
        <p>{item.date}</p>
      </div>
    </div>
  );
};

export default NewItem;