function ButtonReset(props) {

  const resetBtn = () => {
    props.setFilterCharacters('');
    props.setfilterHouseCharacters('gryffindor');
    };

  return <button onClick={resetBtn}>Reset</button>;
}

export default ButtonReset;
