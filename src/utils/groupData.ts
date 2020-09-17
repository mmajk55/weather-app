export const groupDays = (weatherForecastData) => {
  const groupedData = weatherForecastData.reduce((days, row) => {
    const date = row.dt_txt.split(' ')[0];
    days[date] = [...(days[date] ? days[date] : []), row];
    return days;
  }, {});

  return groupedData;
};

export const getDayName = (date) => {
  const dateObject = new Date(date);

  return dateObject.toLocaleDateString('pl', { weekday: 'long' });
};

export const getTime = (date) => {
  const dateObject = new Date(date);

  return dateObject.getHours();
};
