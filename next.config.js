module.exports = () => {
    const rewrites = () => {
      return [
        {
          source: "/trips",
          destination: "https://tripcalendarapi.azurewebsites.net/api/trips",
        },
        {
          source: "/trips/1",
          destination: "https://tripcalendarapi.azurewebsites.net/api/trips/1",
        },
      ];
    };
    return {
      rewrites,
    };
  };