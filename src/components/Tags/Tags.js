import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ShowTags from "./ShowTags";

const Tags = () => {
  const [visibleTags, setVisibleTags] = useState(false);

  const toggleVisibleTags = () => {
    setVisibleTags(!visibleTags);
  };

  return (
    <div className="p-2.5 w-96 mx-auto">
      <h2 className="mb-7 text-green-600 text-xl font-bold text-center">
        Воспользуйтесь уже готовыми подборками
      </h2>
      <p
        className="mb-5 text-base font-medium cursor-pointer hover:opacity-70"
        onClick={toggleVisibleTags}
      >
        Лучшие подборки &nbsp;
        <span className="text-sm">
          {visibleTags === false ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </span>
      </p>
      <ShowTags visibility={visibleTags} cat={1} />
      <p
        className="mb-5 text-base font-medium cursor-pointer hover:opacity-70"
        onClick={toggleVisibleTags}
      >
        Развитие навыков &nbsp;
        <span className="text-sm">
          {visibleTags === false ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </span>
      </p>
      <ShowTags visibility={visibleTags} cat={2} />
      <p
        className="mb-5 text-base font-medium cursor-pointer hover:opacity-70"
        onClick={toggleVisibleTags}
      >
        Местоположение &nbsp;
        <span className="text-sm">
          {visibleTags === false ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </span>
      </p>
      <ShowTags visibility={visibleTags} cat={3} />
    </div>
  );
};

export default Tags;
