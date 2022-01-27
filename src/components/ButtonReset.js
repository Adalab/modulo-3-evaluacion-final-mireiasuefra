function ButtonReset(props) {
  const resetBtn = () => {
    props.setFilterCharacters("");
    props.setfilterHouseCharacters("gryffindor");
  };

  return (
    <div className="reset">
      <button className="reset__button" onClick={resetBtn}>Reset</button>;
    </div>
  );
}

export default ButtonReset;
