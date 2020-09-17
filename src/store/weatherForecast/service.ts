export const fetchWeatherForecastService = async ({ town }) => {
  try {
    const result = await fetch(
      `${process.env.REACT_APP_API_URL}/forecast/?q=${town}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,
    );
    const data = await result.json();

    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
