import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Tags from "./Tags";
import { Issue } from "../shared/types";

interface Label {
  active: string;
  fixed: string;
  developing: string;
  patch: string;
}

const stateLabels = (state: keyof Label) => {
  let labels: Label = {
    active: "Pendiente",
    fixed: "Solucionado",
    developing: "En progreso",
    patch: "Solución temporal"
  }
  return labels[state];
}

const IssuePage = () => {
  const [data, setData] = useState<Issue | null>(null);
  let { id } = useParams();

  const getData = async () => {
    const response = await fetch("http://localhost:8080/city/issues/" + id, {
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setData(data);
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
          <p className="issue-page-state">{stateLabels(data.state as keyof Label)}</p>
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