const { send } = require("micro");
const json = [
  {
    suiteCode: "WFDSB",
    somePrice: 129.0,
    availability: 2
  },
  {
    suiteCode: "FFSB",
    somePrice: 199.0,
    availability: 0
  },
  {
    suiteCode: "PLKF",
    somePrice: 299.0,
    availability: 2
  }
];

const cors = require("micro-cors")();

const handler = (req, res) => send(res, 200, json);

module.exports = cors(handler);
