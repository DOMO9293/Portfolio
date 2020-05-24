import { createRef } from "react";
import brum from "../Work/brum.png";
import foodo from "../Work/foodo1.png";
import virus from "../Work/virusweb.png";

const state = {
  sections: 3,
  pages: 3,
  zoom: 65,
  paragraphs: [
    {
      offset: 0.1,
      factor: 1.75,
      header: "Brum",
      image: brum,
      aspect: 1.1,
      text:
        "errand service application, react-native,expo, styled-components,redux,hooks,jwt,react-router",
      repo: "https://github.com/DOMO9293/Brum-client",
    },
    {
      offset: 1,
      factor: 2.25,
      header: "Racivid-20",
      image: virus,
      aspect: 1.7,
      text:
        "Applications that report only race-related issues, react, hook, three.js, react-three-fiber, ",
      repo: "https://github.com/DOMO9293/Brum-client",
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Foodo",
      image: foodo,
      aspect: 1.7,
      text: "Grocery Shopping List App, react, react-router, chart.js, jwt",
      repo: "https://github.com/DOMO9293/Brum-client",
    },
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 },
  ],
  top: createRef(),
};

export default state;
