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
      image: "",
      technology: ["React", "Axios", "Storybook", "Cypress", "Babel"],
      github: "https://github.com/HoangTienDinh/scheduler",
      website: "",
    },
    {
      title: "Proj Two",
      description:
        "Suspendisse lacinia lectus urna, sit amet hendrerit dolor porttitor eget. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      image: "",
      technology: ["React", "Javascript", "HTML", "CSS"],
      github: "www.github.com",
      website: "",
    },
    {
      title: "Proj Three",
      description:
        "A small little blurb about this cool project I did letting users do BLAH",
      image: "",
      technology: ["Gatsby", "Firebase", "MUI"],
      github: "",
      website: "www.hoangtiendinh.com",
    },
    {
      title: "Proj Four",
      description:
        "A small little blurb about this cool project I did letting users do BLAH, A small little blurb about this cool project I did letting users do BLAH",
      image: "",
      technology: ["React", "Javascript", "HTML", "CSS"],
      github: "www.github.com",
      website: "www.hoangtiendinh.com",
    },
    {
      title: "Proj Five",
      description:
        "A small little blurb about this A small little blurb about this cool project I did letting users do BLAHA small little blurb about this cool project I did letting users do BLAH",
      image: "",
      technology: ["React", "Javascript", "HTML", "CSS"],
      github: "www.github.com",
      website: "www.hoangtiendinh.com",
    },
    {
      title: "Proj Six",
      description:
        "A small little blurb about this cool project I did letting users do BLAH",
      image: "",
      technology: ["React", "Javascript", "HTML", "CSS"],
      github: "www.github.com",
      website: "www.hoangtiendinh.com",
    },
  ],
};

export default { portfolio };
