const BtnChoice = (props) => {
  const visibilityCity = true;
  return (
    <button
      className="p-2 min-w-14 border border-green-500 rounded-lg bg-transparent cursor-pointer hover:bg-green-500 focus:outline-none"
      onClick={() => {
        props.updateData(visibilityCity);
      }}
    >
      {props.name}
    </button>
  );
}

export default BtnChoice;
