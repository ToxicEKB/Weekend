const TagItem = (props) => {
  return (
    <a
      className={`px-3.5 py-1.5 rounded-2xl no-underline text-white text-xs font-semibold hover:shadow-drop
        ${
          props.item.cat === 1
            ? "bg-Orange"
            : `${props.item.cat === 2 ? "bg-Blue" : "bg-Sea"}`
        } `}
      href={`${props.item.url}`}
    >
      {props.item.text}
    </a>
  );
};

export default TagItem;
