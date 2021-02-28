const TagItem = (props) => {
  // const { title, text } = props;
  const { text } = props;

  return (
    // <div>
    //   <p className="mb-5 text-base font-medium cursor-pointer hover:opacity-70">
    //     {title} &nbsp;
    //   </p>

    //   <div className="flex flex-wrap">
    //     <a
    //       className="px-2 py-1 mr-4 mb-5 rounded-md bg-green-500 no-underline text-base hover:bg-green-400"
    //       href="#"
    //     >
    //       {text}
    //     </a>
    //   </div>
    // </div>

    // <a
    //   className="px-2 py-1 mr-4 mb-5 rounded-md bg-green-500 no-underline text-base hover:bg-green-400"
    //   href="#"
    // >
    //   {text}
    // </a>

    <a
      className="px-2 py-1 mr-4 mb-5 rounded-md bg-green-500 no-underline text-base hover:bg-green-400"
      href={`${props.url}`}
    >
      #{props.name}
    </a>
  );
};

export default TagItem;
