export const fetchWeatherForecastService = async ({ town }: { town: string }): Promise<any> => {
  try {
    const result = await fetch(
      `${process.env.REACT_APP_API_URL}/forecast/?q=${town}&units=metric&APPID=${process.env.REACT_APP_API_KEY}&lang=pl`,
    );
    const data = await result.json();

    return data;
  } catch (error) {
    return error;
  }
};
