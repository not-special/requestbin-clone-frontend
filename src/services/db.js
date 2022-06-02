import axios from "axios";
// const root = "https://snaggl.corkboard.dev";
const root = "https://requestbin.scttgrhm.dev";

const createBin = () => {
  // let request = axios.post("http://localhost:3001/bin"); // test
  let request = axios.post(`${root}/api/bins`);
  return request.then(response => response.data);
};

const getRequests = (path) => {
  // let request = axios.get("http://localhost:3001/requests"); // test
  let request = axios.get(`${root}/api/bins/${path}?inspect`);
  return request.then(response => response.data);
}

// /api/bins/:id?inspect


const dbOps = {
  createBin,
  getRequests
};


// const testJSON = {
//   "id": 10,
//   "http_method": "GET",
//   "content_type_header": "application/json",
//   "content_length_header": "23",
//   "headers": {
//     "connection": "upgrade",
//     "host": "requestbin.scttgrhm.dev",
//     "content-length": "23",
//     "content-type": "application/json",
//     "user-agent": "PostmanRuntime/7.29.0",
//     "accept": "*/*",
//     "postman-token": "3e00d609-6feb-4619-9411-941e5bb1b6e6",
//     "accept-encoding": "gzip, deflate, br"
//   },
//   "payload": {}
// };







export default dbOps;



/*
JSON server:
npx json-server --port 3001 --watch db.json

http://localhost:3001/requests
http://localhost:3001/bin


https://requestbin.corkboard.dev/
https://requestbin.corkboard.dev/api/bins/OC1akZn?inspect

*/