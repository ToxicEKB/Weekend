import TagItem from "./TagItem";
import { tagsItems } from "./tagsItems";

const ShowTags = ({ visibility, cat }) => {
  return (
    <div>
      {visibility ? (
        <div className={`flex flex-wrap mb-3
        ${
          cat === 1
            ? "justify-between md:justify-start"
            : ""
        } `}>
          {tagsItems.map((item, idx) => {
            return (
              item.cat === cat && (
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
