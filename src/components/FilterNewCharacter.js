function FilterNewCharacter(props) {
  return (
    <div>
      <label htmlFor="estudiante"></label>
      <input
        type="checkbox" 
        name="name" 
        id="name" 
        onClick={props.handleClick}
        checked={props.newFilter}
        >
      </input>
    </div>
  );
}

export default FilterNewCharacter;
