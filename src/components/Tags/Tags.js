import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ShowTags from "./ShowTags";

import TagItem from "./TagItem";
import { tagsItems } from "./tagsItems";

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

     
      {/* <div className="">
        {tagsItems.map(({ text }, idx) => {
          return <TagItem text={text} key={idx} />;
        })}
      </div> */}

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

      <p
        className="mb-5 text-base font-medium cursor-pointer hover:opacity-70"
        onClick={toggleVisibleTags}
      >
        Лучшие подборки 2&nbsp;
        <span className="text-sm">
          {visibleTags === false ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </span>
      </p>

      <p
        className="mb-5 text-base font-medium cursor-pointer hover:opacity-70"
        onClick={toggleVisibleTags}
      >
        Лучшие подборки 3&nbsp;
        <span className="text-sm">
          {visibleTags === false ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </span>
      </p>

      <ShowTags visibility={visibleTags} />

      {/* {visibleTags ? (
        <div className="flex flex-wrap">
          <TagItem name="рейтинг_5" url="/#" />
          <TagItem name="дети_3+" url="/#" />
          <TagItem name="дети_12+" url="/#" />
          <TagItem name="антистресс" url="/#" />
        </div>
      ) : null} */}

      {/* <p
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
      {visibleTags ? (
        <div className="flex flex-wrap">
          <TagItem name="коммуникация" />
          <TagItem name="концентрация" />
          <TagItem name="креативность" />
          <TagItem name="физическое_развитие" />
        </div>
      ) : null}

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
      {visibleTags ? (
        <div className="flex flex-wrap">
          <TagItem name="в_помещении" />
          <TagItem name="на_улице" />
        </div>
      ) : null} */}
    </div>
  );
};

export default Tags;
