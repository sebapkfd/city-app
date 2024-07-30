import { useEffect, useState } from "react";
import NewItem from "./NewItem";

type New = {
  id: number;
  title: string;
  content: string;
  date: string;
};

const News = () => {
  const [news, setNews] = useState<New[]>([]);

  const getData = async () => {
    const response = await fetch("./news.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    }
    );
    const data = await response.json();
    setNews(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="section">
      <h1>Anuncios</h1>
      <div className="news-list">
        {news?.map((n, index) => (
          <NewItem item={n} key={`new-${index}`}/>
        ))}
      </div>
    </div>
  );
};

export default News;