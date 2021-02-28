const TagItem = (props) => {
  return (
    <a
      className="px-2 py-1 rounded-md bg-green-500 no-underline text-base hover:bg-green-400"
      href={`${props.item.url}`}
    >
      {props.item.text}
    </a>
  );
};

export default TagItem;
