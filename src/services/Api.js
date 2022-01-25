const callToApi = (filterHouseCharacters) => {
  return fetch(`http://hp-api.herokuapp.com/api/characters/house/${filterHouseCharacters}`)
    .then((response) => response.json())
    .then((data) => {
      return data.map((oneCharacter) => {
        return {
          name: oneCharacter.name,
          house: oneCharacter.house,
          species: oneCharacter.species,
          alive: oneCharacter.alive,
          gender: oneCharacter.gender,
          origin: oneCharacter.origin,
          image: oneCharacter.image,
        };
      });
    });
};

export default callToApi;
