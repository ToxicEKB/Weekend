const TagItem = ({ item }) => {
  return (
    <a
      className={`px-3.5 py-1.5 rounded-2xl no-underline text-white text-xs font-semibold hover:shadow-drop
        ${
          item.cat === 1
            ? "bg-Orange"
            : `${item.cat === 2 ? "bg-Blue" : "bg-Sea"}`
        } `}
      href={`${item.url}`}
    >
      {item.text}
    </a>
  );
};

export default TagItem;
