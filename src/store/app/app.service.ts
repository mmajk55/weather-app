export const getUserLocationService = (options?: PositionOptions): Promise<Position> => {
  return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options));
};
