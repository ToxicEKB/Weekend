import TagItem from "./TagItem";
import { tagsItems } from "./tagsItems";

const ShowTags = (props) => {
  return (
    <div>
      {props.visibility ? (
        <div className={`flex flex-wrap
        ${
          props.cat === 1
            ? "justify-between"
            : ""
        } `}>
          {tagsItems.map((item, idx) => {
            return (
              item.cat === props.cat && (
                <div key={idx} className="mr-5 mb-5">
                  <TagItem item={item} key={item.id} cat={item.cat} />
                </div>
              )
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ShowTags;
