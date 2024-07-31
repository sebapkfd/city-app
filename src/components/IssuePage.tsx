import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Tags from "./Tags";
import { Issue } from "../shared/types";

const IssuePage = () => {
  const [data, setData] = useState<Issue | null>(null);
  let { id } = useParams();

  const getData = async () => {
    const response = await fetch("./issues.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    }
    );
    const data = await response.json();

    let value: Issue[] = data.filter(
      (issue: Issue) => id && issue.id === parseInt(id)
    );

    setData(value[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return data ? (
    <div className="issue-page">
      <div className="first-column">
        <img src={data.pictures[0]} alt={data.title} key={`${data.title}-0`} />
        <p>{data.description}</p>
        {data.pictures.map((pic, index) => (
          index > 0 ? <img src={pic} alt={`${data.title}-${index}`} key={`${data.title}-${index}`} /> : null
        ))}
      </div>
      <div className="second-column">
        <p className="issue-page-date">{data.date}</p>
        <h1 className="issue-page-title">{data.title}</h1>
        <p className="issue-page-location">{data.location}</p>
        <div className="issue-page-section">
        <p className="issue-page-label">Estado</p>
          <p className="issue-page-state">{data.state ? "Pendiente" : "Solucionado"}</p>
        </div>
        <div className="issue-page-section">
        <p className="issue-page-label">Categorías</p>
          <Tags tags={data.tags} />
        </div>
      </div>
    </div>
  ) : null;
  // )
};

export default IssuePage;