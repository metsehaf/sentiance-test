const http = require("http");

async function getData() {
  const url = "https://s3-eu-west-1.amazonaws.com/sentiance.solutions/datasets/public/user1.json";
  const result = await http.get(url);

  return result;
  console.dir(result);
}

exports.getUserData = (req, res, next) => {
  getData()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  })
};
