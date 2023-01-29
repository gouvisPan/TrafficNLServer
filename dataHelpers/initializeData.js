const axios = require("axios");
const { extractEventList } = require("./extractEventList.js");

exports.initializeData = () => {
  const url =
    "https://api.anwb.nl/v2/incidents?apikey=QYUEE3fEcFD7SGMJ6E7QBCMzdQGqRkAi&polylines=true" +
    "&polylineBounds=true&totals=true";

  axios.get(url).then(async (response) => {
    extractEventList(response.data.roads);
  });

  const minutes = 5,
    the_interval = minutes * 60 * 1000;
  setInterval(function () {
    console.log("Fetching new data...");
    axios.get(url).then(async (response) => {
      extractEventList(response.data.roads);
    });
  }, the_interval);
};
