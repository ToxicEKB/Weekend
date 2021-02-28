import TagItem from "./TagItem";

const ShowTags = (props) => {
  return (
    <div>
      {props.visibility ? (
        <div className="flex flex-wrap">
          <TagItem name="рейтинг_5" url="/#" />
          <TagItem name="дети_3+" url="/#" />
          <TagItem name="дети_12+" url="/#" />
          <TagItem name="антистресс" url="/#" />
        </div>
      ) : null}
    </div>
  );
};

export default ShowTags;
