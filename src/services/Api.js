const callToApi = () => {
  return fetch("URL")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default callToApi;
