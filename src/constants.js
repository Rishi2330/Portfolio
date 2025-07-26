// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import atsresume from './assets/tech_logo/atsresume.png';
import wanderlust from './assets/tech_logo/wanderlust.png';
import imagegenerator from './assets/tech_logo/imagegenerator.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Education Section Logo's
import mpecLogo from './assets/education_logo/mpec_logo.png';
import gnpsLogo from './assets/education_logo/gnps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import npmLogo from './assets/work_logo/npm.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const education = [
    {
      id: 1,
      img: mpecLogo,
      school: "Maharana Pratap Engineering College, Kanpur",
      date: "Sept 2022 - Aug 2026",
      grade: "8.03 CGPA",
      desc: "I'm pursuing my B-Tech in Computer Science & Engineering from Maharana Pratao Engineering College, Kanpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at MPEC College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - (Computer Science & Engineering)",
    },
    {
      id: 2,
      img: gnpsLogo,
      school: "Guru Nanak Public Senior Secondary School, Kanpur",
      date: "Apr 2021 - March 2022",
      grade: "78.4%",
      desc: "I completed my class XII education from Guru Nanak Public School, Kanpur, Under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 3,
      img: gnpsLogo,
      school: "Guru Nanak Public Senior Secondary School, Kanpur",
      date: "Apr 2019 - March 2020",
      grade: "78.2%",
      desc: "I completed my class X education from Guru Nanak Public School, Kanpur, Under the CBSE board, where I studied Science & Computer Application.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AI Powered ATS Resume Analyzer",
      description:
        "Built a resume evaluation web app using Streamlit, Python, and Gemini 1.5 Flash. The app analyzes resumes for relevance, keyword matching, and formatting based on job descriptions. It provides real-time feedback and suggestions to help users improve their resumes effectively.",
      image: atsresume,
      tags: ["HTML", "CSS", "Python", "React JS", "API"],
      github: "https://github.com/Rishi2330/Ai-Powered---Applicant-Tracking-System",
      webapp: "https://ai-powered-ats-resume-analyzer.onrender.com/",
    },
    {
      id: 1,
      title: "WanderLust - Travel Website",
      description:
        "Developed a travel website like Airbnb using Node.js, Express.js, and MongoDB. Implemented secure authentication, optimized queries, and responsive UI with Bootstrap.",
      image: wanderlust,
      tags: ["Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/Rishi2330/Wanderlust---Travel-Website",
      webapp: "https://ai-powered-ats-resume-analyzer.onrender.com/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Rishi2330/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "AI Image Generator",
      description:
        "An AI Image Generator website built using Hugging Face API",
      image: imagegenerator,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Rishi2330/AI_Image_generator",
      webapp: "https://brilliant-daffodil-e37f37.netlify.app/",
    },
  ];  