const axios = require("axios");

const fetchTeams = async () => {
  try {
    const data = await axios.get("https://statsapi.web.nhl.com/api/v1/teams");
    const response = await data.data.teams;
    return response;
  } catch (err) {
    console.error(err);
  }
};

fetchTeams().then((teams) =>
  teams.map((team) => {
    return team.active;
  })
);

module.exports = { fetchTeams };
