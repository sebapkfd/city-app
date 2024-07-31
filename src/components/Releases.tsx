import { useEffect, useState } from "react";
import ReleaseItem from "./ReleaseItem";
import { Release } from "../shared/types";

const Releases = () => {
  const [releases, setReleases] = useState<Release[]>([]);

  const getData = async () => {
    const response = await fetch("./releases.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    }
    );
    const data = await response.json();
    setReleases(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="section">
      <h1>Anuncios</h1>
      <div className="releases-list">
        {releases?.map((release, index) => (
          <ReleaseItem release={release} key={`release-${index}`}/>
        ))}
      </div>
    </div>
  );
};

export default Releases;