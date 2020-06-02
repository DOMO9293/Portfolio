import { createRef } from "react";
import brum from "../Work/brum.png";
import foodo from "../Work/foodo1.png";
import virus from "../Work/virusweb.png";
import brum1 from "../images/brum/home.png";
import brum2 from "../images/brum/chat.png";
import brum3 from "../images/brum/orderDetail.png";
import brumvid from "../images/brum/brum.mp4";
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
        "errand service application, react-native,expo, styled-components,redux,hooks,jwt,react-navigator",
      repo: "https://github.com/DOMO9293/Brum-client",
      details: [brum1, brum2, brum3],
      description: {
        about:
          "Collaborative Project with the Company “2Luck” based in korea. The platform providing errand services within universities.",
        tech:
          "react-native,expo,redux,hook,jwt,react-navigator,styled-components",
        resource: "https://github.com/DOMO9293/Brum-clien",
        dist: "100",
      },
      vid: brumvid,
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
      details: [brum1, brum2, brum3],
      description: {
        about:
          "Collaborative Project with the Company “2Luck” based in korea. The platform providing errand services within universities.",
        tech:
          "react-native,expo,redux,hook,jwt,react-navigator,styled-components",
        resource: "https://github.com/DOMO9293/Brum-clien",
        dist: "100",
      },
      vid: brumvid,
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Foodo",
      image: foodo,
      aspect: 1.7,
      text: "Grocery Shopping List App, react, react-router, chart.js, jwt",
      repo: "https://github.com/DOMO9293/Brum-client",
      details: [brum1, brum2, brum3],
      description: {
        about:
          "Collaborative Project with the Company “2Luck” based in korea. The platform providing errand services within universities.",
        tech:
          "react-native,expo,redux,hook,jwt,react-navigator,styled-components",
        resource: "https://github.com/DOMO9293/Brum-clien",
        dist: "100",
      },
      vid: brumvid,
    },
  ],
  about: {
    whoami: `I'm Jaesook Jeong. A Korean front-end Developer, currently living in Germany.
    I have serious passion for UI effects, animations dynamic user experiences.`,
    promo: "Fill free to contact me!",
    skills: [
      "HTML5",
      "CSS3",
      "Javascript",
      "React",
      "Redux",
      "hook",
      "React-native",
      "Node.js",
      "mysql",
      "express",
      "styled-components",
    ],
    contact: ["email: flqjsl@gmail.com", "github: https://github.com/DOMO9293"],
  },

  top: createRef(),
};

export default state;
