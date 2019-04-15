const { send } = require("micro");
const cors = require("micro-cors")();

const json = [
  {
    suiteCode: "WFDSB",
    detail: "A good room"
  },
  {
    suiteCode: "FFSB",
    detail: "A nice room"
  },
  {
    suiteCode: "PLKF",
    detail: "A fine room"
  }
];

const handler = (req, res) => send(res, 200, json);

module.exports = cors(handler);
