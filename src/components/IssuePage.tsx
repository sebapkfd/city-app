import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";

type Issue = {
  id: number;
  title: string;
  pictures: string[];
  description: string;
  date: string;
  location: string;
  tags: number[];
};

const IssuePage = () => {
  const [data, setData] = useState<Issue | null>(null);
  const [emblaRef] = useEmblaCarousel();
  let { id } = useParams();
  

  const getData = async () => {
    const response = await fetch(
      "http://localhost:5173/src/assets/dummy-issues.json",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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
      <div className="main-row">
        <div>
          <h1 className="issue-page-title">{data.title}</h1>
          <p className="issue-page-title">{data.date}</p>
        </div>

        <p className="issue-page-description">{data.description}</p>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {data.pictures.map((pic, i) => (
              <div className="embla__slide" key={data.title + "-" + i}>
                <img src={pic} />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="background">
          {data.pictures.map((pic, i) => (
            <img src={pic} key={data.title + "-" + i} />
          ))}
        </div> */}
        <div>
          <p>{data.location}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default IssuePage;
