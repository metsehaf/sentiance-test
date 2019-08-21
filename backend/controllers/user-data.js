const axios = require('axios');

const url = process.env.SENTIANCE_URL;

exports.getUserData = (req, res, next) => {
  axios.get(url)
  .then(response => {
    console.log(response);
    res.status(200).json({
      message: "success, fetching user data Succeeded",
      userData: response.data
    })
  })
  .catch(error => {
    res.status(500).json({
      message: `fetching User data failed! ${error}`
    });
  });
};
