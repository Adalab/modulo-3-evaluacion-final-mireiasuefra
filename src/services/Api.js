const callToApi = (casa) => {
  return fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((oneCharacter) => {
        return {
          name: oneCharacter.name,
          house: oneCharacter.house,
          species: oneCharacter.species,
          status: oneCharacter.status,
          gender: oneCharacter.gender,
          origin: oneCharacter.origin,
          image: oneCharacter.image,
        };
      });
    });
};

export default callToApi;
