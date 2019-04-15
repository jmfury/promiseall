// const {request} = require('graphql-request');
// const endpoint = 'https://api.graph.cool/simple/v1/movies';

// // Prepare simple query
// const query = `
//   query Movie($title: String!) {
//     movie: Movie(title: $title) {
//       releaseDate
//       actors {
//         name
//       }
//     }
//   }
// `;

// module.exports = async () => {
// 	// Perform query
// 	const data = await request(endpoint, query, {title: 'Inception'});

// 	// Return Movie
// 	return data.movie;
// };
// const { send } = require("micro");
// const fetch = require('node-fetch');
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
// module.exports = () => send(json);

const cors = require("micro-cors")();

const handler = (req, res) => send(res, 200, json);

module.exports = cors(handler);
// module.exports = res => {
//   // const response = await fetch('https://api.example.com');
//   // const json = await response.json();

//   return res.end(JSON.stringify(json));
// };
