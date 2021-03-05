import TagItem from "./TagItem";
import { tagsItems } from "./tagsItems";

const ShowTags = (props) => {
  return (
    <div>
      {props.visibility ? (
        <div className="flex flex-wrap">
          {tagsItems.map((item, idx) => {
            return (
              item.cat === props.cat && (
                <div key={idx} className="mr-4 mb-5">
                  <TagItem item={item} key={item.id} />
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
