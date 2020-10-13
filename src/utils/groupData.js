export const groupDays = (weatherForecastData) => {
  const groupedData = weatherForecastData.reduce((days, row) => {
    const date = row.dt_txt.split(' ')[0];
    days[date] = [...(days[date] ? days[date] : []), row];
    return days;
  }, {});

  return groupedData;
};

export const getStats = (arr) => {
  return {
    min: Math.round(Math.max(...arr)),
    max: Math.round(Math.min(...arr)),
    mean: Math.round(arr.reduce((a, b) => a + b) / arr.length),
  };
};
