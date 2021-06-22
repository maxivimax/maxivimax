const fetch = require("isomorphic-unfetch");
const { promises: fs } = require("fs");
const path = require("path");
var weather = require('openweather-apis');

weather.setLang('ru');
weather.setCity('Petrozavodsk');
weather.setUnits('metric');
weather.setAPPID("a2d8addaa9d3224d5b808a9dd5a5110c");
let sjsontemp = [];

const myghurl = "https://api.github.com/users/maxivimax";
const bhumansurl = "https://api.github.com/repos/maxivimax/maxivimax/stargazers";

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
  const bhumans = await (
    await fetch(bhumansurl, {})
  ).json();
  
  var allname = "";
  
  const aaa = bhumans.forEach((element) => { allname = allname + element.login + ", " });

  const readme = readmeTemplate
    .replace("{name}", '"' + info["name"] + '"')
    .replace("{temp}", '"' + sjsontemp["temp"] + '"')
    .replace("{humidity}", '"' + sjsontemp["humidity"] + '%"')
    .replace("{loc}", '"' + info["location"] + '"')
    .replace("{bhumans}", bhumans);

  await fs.writeFile("README.md", readme);
}

main();
