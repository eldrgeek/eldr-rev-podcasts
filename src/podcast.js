const request = require("request");

const parsePodcast = require("node-podcast-parser");

const getPodcast = url => {
  console.log("URL= ", url);
  const corsURL = "https://cors-anywhere.herokuapp.com/" + url;
  const response = fetch(corsURL, {
    method: "GET" // *GET, POST, PUT, DELETE, etc.
    // mode: "no-cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin" // include, *same-origin, omit
  })
    .then(data => {
      console.log("got data from fetch", data);
      return data.text();
    })
    .then(data => {
      console.log("data result", data);
    })
    .catch(e => console.log("error is", e + ""));
  console.log("out of chain");
  // const myJson = await response.json();
  // console.log(JSON.stringify(myJson));
  // const response = await fetch(url)
  // console.log(response)
  //     .then(data => {
  //     console.log(data)
  //     parsePodcast(data, (err, data) => {
  //       if (err) {
  //         console.error("Parsing error", err);
  //         return;
  //       }

  //       console.log(data);
  //     });
  //   })
  //   .catch(e => console.log("error",e))
};

export default getPodcast;
