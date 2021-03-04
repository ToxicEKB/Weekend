const BtnChoice = (props) => {
  const visibilityCity = true;
  return (
    <button
      className="p-2 min-w-14 border border-Sea rounded-lg bg-transparent cursor-pointer hover:bg-Sea focus:outline-none"
      onClick={() => {
        props.updateData(visibilityCity);
      }}
    >
      {props.name}
    </button>
  );
}

export default BtnChoice;
