const axios = require('axios');

const url = process.env.SENTIANCE_URL;

exports.getUserData = (req, res, next) => {
  axios.get("https://s3-eu-west-1.amazonaws.com/sentiance.solutions/datasets/public/user1.json")
  .then(response => {
    console.log(response);
    res.status(200).json({
      message: "success, fetching user data Succeeded",
      userData: response.data.data.user.moment_history
    })
  })
  .catch(error => {
    res.status(500).json({
      message: `fetching User data failed! ${error}`
    });
  });
};
