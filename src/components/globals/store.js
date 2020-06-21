import { createRef } from "react";
import brum from "../Work/brum.png";
import foodo from "../Work/foodo1.png";
import virus from "../Work/virusweb.png";
import brum1 from "../images/brum/home.png";
import brum2 from "../images/brum/chat.png";
import brum3 from "../images/brum/orderDetail.png";
import brumvid from "../images/brum/brum.mp4";
import racivid from "../images/racivid/racivid.mp4";
import racivid1 from "../images/racivid/racivid1.png";
import racivid2 from "../images/racivid/racivid2.png";
import racivid3 from "../images/racivid/racivid3.png";
import foodovid from "../images/foo-do/foodomov.mp4";
import foodo1 from "../images/foo-do/foodo1.png";
import foodo2 from "../images/foo-do/foodo2.png";
import foodo3 from "../images/foo-do/foodo3.png";

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
        "errand service application, React Native, Redux, React-Router, Styled Components",
      repo: "https://github.com/DOMO9293/Brum-client",
      details: [brum1, brum2, brum3],
      description: {
        about:
          "Collaborative Project with the Company “2Luck” based in korea. The platform providing errand services within universities.",
        tech:
          "react-native,expo,redux,hook,jwt,react-navigator,styled-components",
        resource: "https://github.com/DOMO9293/brumclient",
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
        "Applications that report only race-related issues, React.js, Redux, React-Router, Three.js, Styled Components, Cloud Firestore ",
      repo: "https://github.com/DOMO9293/f3d",
      details: [racivid1, racivid2, racivid3],
      description: {
        about: "Applications report only race-related issues",
        tech:
          "React.js, Redux, React-Router, Three.js, Styled Components, Cloud Firestore",
        resource: "https://github.com/DOMO9293/f3d",
        dist: "100",
      },
      vid: racivid,
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Foodo",
      image: foodo,
      aspect: 1.7,
      text:
        "Grocery Shopping List App, React.js, React Router, Reactstrap, Chart.js, JWT, Axios",
      repo: "https://github.com/DOMO9293/foodo",
      details: [foodo1, foodo2, foodo3],
      description: {
        about: "Grocery Shopping List App",
        tech: "React.js, React Router, Reactstrap, Chart.js, JWT, Axios",
        resource: "https://github.com/DOMO9293/foodo",
        dist: "100",
      },
      vid: foodovid,
    },
  ],
  about: {
    whoami: `I'm Jaesook Jeong. A Korean front-end Developer, currently living in Germany.
    I have serious passion for UI effects, animations dynamic user experiences.`,
    promo: "Fill free to contact me!",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Redux",
      "React-native",
      "Node.js",
      "mysql",
      "express",
      "styled-components",
    ],
    contact: [
      "email: jeong.jaesook92@gmail.com",
      "github: https://github.com/DOMO9293",
    ],
  },

  top: createRef(),
};

export default state;
