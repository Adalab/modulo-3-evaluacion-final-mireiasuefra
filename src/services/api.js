const callToApi = (filterHouseCharacters) => {
  return fetch(
    `http://hp-api.herokuapp.com/api/characters/house/${filterHouseCharacters}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data
        .sort((aCharacter, bCharacter) => {
          if (aCharacter.name < bCharacter.name) {
            return -1;
          }

          if (aCharacter.name > bCharacter.name) {
            return 1;
          }
          return 0;
        })
        .map((oneCharacter) => {
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
