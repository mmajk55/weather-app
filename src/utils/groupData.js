export const groupDays = (weatherForecastData) => {
  const groupedData = weatherForecastData.reduce((days, row) => {
    const date = row.dt_txt.split(' ')[0];
    days[date] = [...(days[date] ? days[date] : []), row];
    return days;
  }, {});

  return groupedData;
};

export const getMax = (arr) => Math.round(Math.max(...arr.map((item) => item.main.temp)));

export const getMin = (arr) => Math.round(Math.min(...arr.map((item) => item.main.temp)));

export const getMean = (arr) => Math.round(arr.reduce((a, b) => a + b) / arr.length);
