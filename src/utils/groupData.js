export const groupDays = (weatherForecastData) => {
  const groupedData = weatherForecastData.reduce((days, row) => {
    const date = row.dt_txt.split(' ')[0];
    days[date] = [...(days[date] ? days[date] : []), row];
    return days;
  }, {});

  return groupedData;
};

export const getMinMax = (arr) => {
  return {
    min: Math.round(Math.max(...arr.map((item) => item.main.temp))),
    max: Math.round(Math.min(...arr.map((item) => item.main.temp))),
  };
};

export const getMeanTemp = (arr) => Math.round(arr.reduce((a, b) => a + b) / arr.length);
