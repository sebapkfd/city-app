import { Link } from "react-router-dom";
import { Tag } from "../shared/types";

const Tags = ({ tags }: { tags: Tag[] }) => {

  return tags.length > 0 ? (
    <div className="issue-page-tags">
      {tags.map((cat, index) => (
        <Link to={"/categories/" + cat.id} key={`tag-${index}`}>
          <p className={"issue-page-tag"} >{cat.name}</p>
        </Link>
      ))}
    </div>
  ) : null;

}

export default Tags;