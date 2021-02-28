import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ShowTags from "./ShowTags";

const BlockItem = (props) => {
  const [visibleTags, setVisibleTags] = useState(false);

  const toggleVisibleTags = () => {
    setVisibleTags(!visibleTags);
  };

  return (
    <div className="">
      <p
        className="mb-5 text-base font-medium cursor-pointer hover:opacity-70"
        onClick={toggleVisibleTags}
      >
        {props.title} &nbsp;
        <span className="text-sm">
          {visibleTags === false ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </span>
      </p>
      <ShowTags visibility={visibleTags} cat={1} />
    </div>
  );
};

export default BlockItem;
