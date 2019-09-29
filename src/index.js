import React from "react";
import ReactDOM from "react-dom";
import parsePodcast from "node-podcast-parser";
import "./styles.css";
import transcript from "./transcript.json";
import getPodcast from "./podcast";
const accessToken =
  "02qpETqg3XvjGChGn7F1wc-5dHgQuOOtpe7MzS7AsskYSO5XN9EMfQkyz-48fsXmpBE2dLN7vFRVZAy-Z3BFv-r0MvGBo";

let text = transcript.monologues[0].elements.map(el => {
  return el.value;
});

const url = "https://rss.art19.com/the-portal";

console.log("calling");
getPodcast(url);
console.log("called get podcast");

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ textAlign: "left" }}>{text}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
