import { Cords } from '../app/app.types';

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

export const fetchWeatherForecastByLocationService = async ({
  userLocation,
}: {
  userLocation: Cords;
}): Promise<any> => {
  try {
    const result = await fetch(
      `${process.env.REACT_APP_API_URL}/forecast/?lat=${userLocation.lat}&lon=${userLocation.long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}&lang=pl`,
    );
    const data = await result.json();

    return data;
  } catch (error) {
    return error;
  }
};
