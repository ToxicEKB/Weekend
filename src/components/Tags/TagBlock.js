import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ShowTags from "./ShowTags";

const TagBlock = (props) => {
  const [visibleTags, setVisibleTags] = useState(true);

  const toggleVisibleTags = () => {
    setVisibleTags(!visibleTags);
  };

  return (
    <div className="text-Gray">
      <p
        className="mb-3 text-Gray text-base font-medium cursor-pointer"
        onClick={toggleVisibleTags}
      >
        {props.title} &nbsp;
        <span className="text-sm">
          {visibleTags ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </span>
      </p>
      <ShowTags visibility={visibleTags} cat={props.cat} />
    </div>
  );
};

export default TagBlock;
