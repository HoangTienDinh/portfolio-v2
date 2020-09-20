import picture from "../assets/Alan.png";

const portfolio = {
  featuredProj: [
    {
      title: "Alan News",
      headline: "Voice chat bot, fetching the latest news.",
      description:
        "Built with the intention to learn how to create an interactive chat bot. Working with \"AlanAI\" API to allow users to fetch news articles from the \"NewsAPI\" API with voice commands. Alan will also read off headlines, once the articles are fetched",
      image: picture,
      technology: ["React", "MUI", "AlanAI API", "NewsAPI API"],
      github: "https://github.com/HoangTienDinh/alan-ai-react",
      website: "https://alan-news-application.netlify.app/",
    },
    {
      title: "Of Course!",
      headline: "Online study assistant tool, with use of flash cards.",
      description:
        "Of Course! allows users to create decks of flash cards for studying purposes. These decks can also be shared amongst other users and searched/filtered by their metadata. With each study deck you're allowed to try out three different modes to study with; Original, Test, and Memory Match!",
      image: picture,
      technology: ["React", "React-Spring", "Express", "PSQL", "Node"],
      github: "https://github.com/HoangTienDinh/Of-Course",
      website: "",
    },
    {
      title: "Portfolio Site",
      headline: "A website built as a template for any user.",
      description:
        "This project is built with the concept of being designed as a template for other creators to showcase their work. Coded to be modular and easy to plug in one's own portfolio information.",
      image: picture,
      technology: ["Javascript", "React", "react-reveal"],
      github: "https://www.github.com",
      website: "",
    },
  ],
  noteworthyProj: [
    {
      title: "Scheduler",
      description:
        "Scheduling app to setup appointments between interviewers with interviewees, throughout the calendar week. Giving users a nice interface to interact with.",
      technology: ["React", "Axios", "Storybook", "Cypress", "Babel"],
      github: "https://github.com/HoangTienDinh/scheduler",
      website: "",
    },
    {
      title: "Jungle",
      description:
        "An E-commerce retail store utilizing the power of Stripe for online purchases. Built to learn and practice coding in Ruby and Ruby on Rails, using Active Record to store data.",
      technology: ["Ruby", "Ruby On Rails", "Active Record", "Stripe"],
      github: "https://github.com/HoangTienDinh/jungle-rails",
      website: "",
    },
    {
      title: "Hangman",
      description:
        "A SPA allowing users to to play the game hangman. Built to practice working in React and hosting on Netlify.",
      technology: ["React", "Javascript", "HTML", "CSS"],
      github: "https://github.com/HoangTienDinh/react-hangman",
      website: "https://hangman-15404b.netlify.app/",
    },
    {
      title: "Github Jobs",
      description:
        "Job search board using Github Jobs API, to render a list of job postings on Github. Implementing filters by description and location, and allowing pagination of your job search.",
      technology: ["React", "Axios", "Github API", "Bootstrap"],
      github: "https://github.com/HoangTienDinh/github-jobs-react",
      website: "https://github-jobs-1003.netlify.app/",
    },
    {
      title: "Firegram",
      description:
        "A simple instagram clone built on React, to learn and use Firebase as a back-end service. Framer Motion was also used to make the animations for a better User Experience.",
      technology: ["React", "Firebase", "Framer Motion"],
      github: "https://github.com/HoangTienDinh/react-firebase-photo-gallery",
      website: "",
    },
    {
      title: "Chatter",
      description:
        "Chat room communication app, allowing users to join rooms and begin communicating with each other.",
      technology: ["React", "Socket.IO", "Node", "Express"],
      github: "https://github.com/HoangTienDinh/chatter-socketio-react",
      website: "",
    },
  ],
  social: {
    github: "https://github.com/HoangTienDinh",
    linkedIn: "https://www.linkedin.com/in/hoangdinh90/",
    instagram: "https://www.instagram.com/hohohoang/",
    email: "mailto:hoangdinh90@gmail.com",
  }
};

export default { portfolio };
