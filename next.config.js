module.exports = () => {
    const rewrites = () => {
      return [
        {
          source: "/api/trips",
          destination: "https://tripcalendarapi.azurewebsites.net/api/trips",
        },
        {
          source: "/api/trips/:id",
          destination: "https://tripcalendarapi.azurewebsites.net/api/trips/:id",
        },
      ];
    };
    return {
      rewrites,
    };
  };