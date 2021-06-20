const fetch = require("isomorphic-unfetch");
const { promises: fs } = require("fs");
const path = require("path");
var weather = require('openweather-apis');

weather.setLang('ru');
weather.setCity('Fairplay');
weather.setUnits('metric');
weather.setAPPID("a2d8addaa9d3224d5b808a9dd5a5110c");
let sjsontemp = [];

const myghurl = "https://api.github.com/users/maxivimax";

async function main() {
  weather.getSmartJSON(function(err, smart){
		sjsontemp = smart;
	});
  
  const readmeTemplate = (
    await fs.readFile(path.join(process.cwd(), "./README.template.md"))
  ).toString("utf-8");

  const info = await (
    await fetch(myghurl, {})
  ).json();

  const readme = readmeTemplate
    .replace("{name}", '"' + info["name"] + '"')
    .replace("{temp}", '"' + sjsontemp["temp"] + '"')
    .replace("{humidity}", '"' + sjsontemp["humidity"] + '"')
    .replace("{loc}", '"' + info["location"] + '"');

  await fs.writeFile("README.md", readme);
}

main();
