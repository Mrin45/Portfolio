/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  // googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Mrinmoy",
  // logo_name: "Mrin.n",
  // nickname: "Mrin / Man",
  full_name: "Mrinmoy Nath",
  subTitle:
    "GIS & Web Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1oEIu0OREOcMjqMF1txsS-LsMqHVMIhuO/view?usp=drive_link",
  mail: "mrinmoynath099@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Mrin45",
  linkedin: "https://www.linkedin.com/in/mrinmoy-nath-22871a1b9/",
  gmail: "mrinmoynath099@gmail.com",
  facebook: "https://www.facebook.com/mridh.sivam",
  twitter: "https://twitter.com/Mrinmoy79294250?s=09",
  instagram: "https://www.instagram.com/",
};

const skills = {
  data: [
    {
      title: "GIS Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ I have practical knowledge about ArcGIS, Erdas Imagine, Saga GIS, QGIS, Google Earth Engine and Google Earth Pro.",
        "⚡ Building interactive maps end using Leaflet JS.",
        "⚡ Developing webGIS dashboard using Leaflet JS, D3 JS & Geoserver.",
        "⚡ Creating dashboard backend in Geoserver, PostGIS & PostgreSQL.",
        "⚡ Perform Geo-Spatial task using programing language like Python, R, Javascript.",
      ],
      softwareSkills: [
        
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "ArcGIS",
          fontAwesomeClassname: "simple-icons:arcgis",
          style: {
            color: "#2788c4",
          },
        },
        {
          skillName: "QGIS",
          fontAwesomeClassname: "simple-icons:qgis",
          style: {
            color: "#85ab31",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "devicon:r",
          style: {
            color: "#85ab31",
          },
        },
        {
          skillName: "Google Earth Engine",
          fontAwesomeClassname: "simple-icons:googleearthengine",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#5981c1",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Google Earth Pro",
          fontAwesomeClassname: "simple-icons:googleearth",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#a0a8b4",
          },
        },
        {
          skillName: "Leaflet js",
          fontAwesomeClassname: "simple-icons:leaflet",
          style: {
            // backgroundColor: "#FFFFFF",
            color: "#40ff00",
          },
        },
        {
          skillName: "D3 js",
          fontAwesomeClassname: "logos:d3",
          style: {
            // backgroundColor: "#FFFFFF",
            color: "#40ff00",
          },
        },
        {
          skillName: "Postgre SQL",
          fontAwesomeClassname: "devicon:postgresql-wordmark",
          style: {
            // backgroundColor: "#FFFFFF",
            color: "#40ff00",
          },
        },
        // // {
        // //   skillName: "Java",
        // //   fontAwesomeClassname: "simple-icons:Java",
        // //   style: {
        // //     color: "#f89820",
        // //   },
        // // },
        // {
        //   skillName: "PHP",
        //   fontAwesomeClassname: "simple-icons:php",
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
        // // {
        // //   skillName: "ReactJS",
        // //   fontAwesomeClassname: "simple-icons:react",
        // //   style: {
        // //     color: "#61DAFB",
        // //   },
        // // },
        // // {
        // //   skillName: "NodeJS",
        // //   fontAwesomeClassname: "simple-icons:node-dot-js",
        // //   style: {
        // //     color: "#339933",
        // //   },
        // // },
        // // {
        // //   skillName: "NPM",
        // //   fontAwesomeClassname: "simple-icons:npm",
        // //   style: {
        // //     color: "#CB3837",
        // //   },
        // // },
        // // {
        // //   skillName: "MongoDB",
        // //   fontAwesomeClassname: "simple-icons:mongodb",
        // //   style: {
        // //     color: "#439743",
        // //   },
        // // },
        // // {
        // //   skillName: "GraphQL",
        // //   fontAwesomeClassname: "simple-icons:graphql",
        // //   style: {
        // //     color: "#DE33A6",
        // //   },
        // // },
        // // {
        // //   skillName: "Android",
        // //   fontAwesomeClassname: "simple-icons:android",
        // //   style: {
        // //     color: "#3DDC84",
        // //   },
        // // },
        // // {
        // //   skillName: "Flutter",
        // //   fontAwesomeClassname: "simple-icons:flutter",
        // //   style: {
        // //     color: "#02569B",
        // //   },
        // // },
        // // {
        // //   skillName: "Dart",
        // //   fontAwesomeClassname: "simple-icons:dart",
        // //   style: {
        // //     color: "#29B0EE",
        // //   },
        // // },
        // // {
        // //   skillName: "Visual Basic",
        // //   fontAwesomeClassname: "simple-icons:dot-net",
        // //   style: {
        // //     color: "#029FCE",
        // //   },
        // // },
        // {
        //   skillName: "MySQL",
        //   fontAwesomeClassname: "simple-icons:mysql",
        //   style: {
        //     color: "#4479A1",
        //   },
        // },
        // // {
        // //   skillName: "jQuery",
        // //   fontAwesomeClassname: "simple-icons:jquery",
        // //   style: {
        // //     color: "#0865A6",
        // //   },
        // // },
        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        // // {
        // //   skillName: "Apache",
        // //   fontAwesomeClassname: "simple-icons:apache",
        // //   style: {
        // //     color: "#CA1A22",
        // //   },
        // // },
        // {
        //   skillName: "Git",
        //   fontAwesomeClassname: "simple-icons:git",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // // {
        // //   skillName: "C++",
        // //   fontAwesomeClassname: "simple-icons:cplusplus",
        // //   style: {
        // //     color: "#E94E32",
        // //   },
        // // },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "simple-icons:python",
        //   style: {
        //     color: "#3776AB",
        //   },
        // },
        // {
        //   skillName: "Tableau",
        //   fontAwesomeClassname: "simple-icons:tableau",
        //   style: {
        //     color: "#E97627",
        //   },
        // },
        // // {
        // //   skillName: "Hadoop",
        // //   fontAwesomeClassname: "simple-icons:hadoop",
        // //   style: {
        // //     color: "#3776AB",
        // //   },
        // // },
        // {
        //   skillName: "Microsoft 365",
        //   fontAwesomeClassname: "simple-icons:microsoftoffice",
        //   style: {
        //     color: "#F25022",
        //   },
        // },
        // // {
        // //   skillName: "Adobe Lightroom",
        // //   fontAwesomeClassname: "simple-icons:",
        // //   style: {
        // //     color: "#3776AB",
        // //   },
        // // },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces web applications.",
        "⚡ Building responsive website front end using Javascript.",
        "⚡ Developing web applications using HTML, CSS, Javascript.",
        "⚡ Creating application backend in Php & SQL.",
      ],
      softwareSkills: [
        
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        // {
        //   skillName: "ArcGIS",
        //   fontAwesomeClassname: "simple-icons:arcgis",
        //   style: {
        //     color: "#2788c4",
        //   },
        // },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Leaflet js",
          fontAwesomeClassname: "simple-icons:leaflet",
          style: {
            // backgroundColor: "#FFFFFF",
            color: "#40ff00",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "Postgre SQL",
          fontAwesomeClassname: "devicon:postgresql-wordmark",
          style: {
            // backgroundColor: "#FFFFFF",
            color: "#40ff00",
          },
        },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#439743",
        //   },
        // },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "icon-park:github",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "C++",
        //   fontAwesomeClassname: "simple-icons:cplusplus",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#E97627",
          },
        },
        // {
        //   skillName: "Hadoop",
        //   fontAwesomeClassname: "simple-icons:hadoop",
        //   style: {
        //     color: "#3776AB",
        //   },
        // },
        {
          skillName: "Microsoft 365",
          fontAwesomeClassname: "simple-icons:microsoftoffice",
          style: {
            color: "#F25022",
          },
        },
        // {
        //   skillName: "Adobe Lightroom",
        //   fontAwesomeClassname: "simple-icons:",
        //   style: {
        //     color: "#3776AB",
        //   },
        // },
      ],
    },
    // {
    //   title: "Mobile Photographer",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Experience hosting and managing websites",
    //     "⚡ Experience with Continuous Integration",
    //   ],
    //   softwareSkills: [
    //     // {
    //     //   skillName: "AWS",
    //     //   fontAwesomeClassname: "simple-icons:amazonaws",
    //     //   style: {
    //     //     color: "#FF9900",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "Netlify",
    //     //   fontAwesomeClassname: "simple-icons:netlify",
    //     //   style: {
    //     //     color: "#38AFBB",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "Heroku",
    //     //   fontAwesomeClassname: "simple-icons:heroku",
    //     //   style: {
    //     //     color: "#6863A6",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "Firebase",
    //     //   fontAwesomeClassname: "simple-icons:firebase",
    //     //   style: {
    //     //     color: "#FFCA28",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "PostgreSQL",
    //     //   fontAwesomeClassname: "simple-icons:postgresql",
    //     //   style: {
    //     //     color: "#336791",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "MongoDB",
    //     //   fontAwesomeClassname: "simple-icons:mongodb",
    //     //   style: {
    //     //     color: "#47A248",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "Docker",
    //     //   fontAwesomeClassname: "simple-icons:docker",
    //     //   style: {
    //     //     color: "#1488C6",
    //     //   },
    //     // },
    //     // {
    //     //   skillName: "GitHub Actions",
    //     //   fontAwesomeClassname: "simple-icons:githubactions",
    //     //   style: {
    //     //     color: "#5b77ef",
    //     //   },
    //     // },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Madras",
      subtitle: "M.Tech in Geoinformatics",
      logo_path: "MU.png",
      alt_name: "Kaziranga University",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I have pursuing my master's in Geoinformatics.",
        "⚡ I have studied core subjects like GIS, Remote Sensing, Geo-Statistics etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.unom.ac.in/",
    },
    {
      title: "The Assam Kaziranga University",
      subtitle: "B.Tech in Computer Science and Engineering",
      logo_path: "ku.png",
      alt_name: "Kaziranga University",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have completed my bachelors in Computer Science and Engineering.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://kazirangauniversity.in/",
    },
    {
      title: "IBM",
      subtitle: "B.Tech in CSE(Data Science)",
      logo_path: "IBM.png",
      alt_name: "Kaziranga University",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have completed my bachelors in Data Science(CSE).",
        "⚡ I have studied core subjects like Big Data, Data Analytics, Machine Learning, Data Mining, Data Warehouse etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.ibm.com/in-en",
    },
    {
      title: "Pachim Darrang Academy",
      subtitle: "12th Boards",
      logo_path: "pd.png",
      alt_name: "Pachim Darrang Academy",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ I have completed 12th in Science.",
      ],
      website_link: "https://www.facebook.com/people/Pachim-Darrang-Academy/100063882612262/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Internship",
      subtitle: "Assam State Space Application Centre(ASSAC)",
      logo_path: "ASSAC_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1XhwdTGJaZrrPzvZhqUvmsQUO_DF4XNI_/view?usp=drive_link",
      alt_name: "iocl",
      //color_code: "#2AAFED",
      color_code: "#008000",
    },
    {
      title: "Leaflet js",
      subtitle: "Udemy",
      logo_path: "udemy.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1ZMctF33F9evLa3chhrtu_zlx3D2V4au-/view?usp=sharing",
      alt_name: "udemy",
      //color_code: "#2AAFED",
      color_code: "#d11aff",
    },
    {
      title: "Data Science Graduate",
      subtitle: "IBM",
      logo_path: "Data_Science_4-Star_Graduate.png",
      certificate_link:
        "https://drive.google.com/file/d/1CQo9Nx17JSg-FyJ5FiSV4XTa-0BO-gS0/view?usp=drive_link",
      alt_name: "ibm",
      //color_code: "#2AAFED",
      color_code: "#04559b",
    },
    {
      title: "Java with DSA",
      subtitle: "Apna College",
      logo_path: "apna college.png",
      certificate_link:
        "https://drive.google.com/file/d/1f4VMoE-rCmoCbLUVs2Y3m2auF4finSNq/view?usp=drive_link",
      alt_name: "alpha batch",
      //color_code: "#2AAFED",
      color_code: "#ffb6c1",
    },
    {
      title: "Internship",
      subtitle: "Indian Oil Corporation Ltd",
      logo_path: "iocl.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1HFUgGfYamvjLMUIHTZPutyc7tNc9f3sK/view?usp=drivesdk",
      alt_name: "iocl",
      //color_code: "#2AAFED",
      color_code: "#f26d25",
    },
    {
      title: "Internship",
      subtitle: "The Sparks Foundation",
      logo_path: "tsf.jpg",
      certificate_link:
        "https://drive.google.com/file/d/167Q7QkCbJaT2BthVC5VaNo3OMAEeFhRz/view?usp=drivesdk",
      alt_name: "tsf",
      color_code: "#cc0000",
    },
    {
      title: "Freelance Work",
      subtitle: "Chegg India Pvt. Ltd.",
      logo_path: "chegg.jpg",
      certificate_link:
        "https://drive.google.com/file/d/11gXIaCgXMUQ5aVLWubnC5n5KCdecPQHp/view?usp=drivesdk",
      alt_name: "chegg",
      // color_code: "#F6B808",
      color_code: "#ea7405",
    },
    {
      title: "Winner (Paper Presentation)",
      subtitle: "IBM",
      logo_path: "IBM.jpg",
      certificate_link:
        "https://drive.google.com/file/d/19BZ4xGuIZIgXuQIEMLPuX4A4nF9hK4Xg/view?usp=drivesdk",
      alt_name: "ibm",
      color_code: "#04559b",
    },
    {
      title: "Python",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1Kn3knQEZCvnyyd6HUW_0bjUmfO3kjgdQ/view?usp=drivesdk",
      alt_name: "python",
      color_code: "#fffbf3",
    },
    {
      title: "Winner (Project Presentation)",
      subtitle: "IBM",
      logo_path: "IBM.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1smtMG3-AoY-0lxGeqyLg3x_yDfDOqK7W/view?usp=drivesdk",
      alt_name: "ibm",
      color_code: "#04559b",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed three internship. I've mostly done projects on my own and I am actively looking for jobs. I love organizing events.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "WebGIS Intern",
          company: "Assam State Space Application Centre(ASSAC)",
          company_url: "https://assac.assam.gov.in/",
          logo_path: "ASSAC_logo.png",
          duration: "June 2023 - August 2023",
          location: "On Site",
          description: [
            "⚡ Implemented a location based WebGIS dashboard of small tea gardens in Udalguri district of Assam.",
          ],
          color: "#ffffff",
        },
        {
          title: "Managed Network Expert(Freelancer)",
          company: "Chegg India Pvt. Ltd.",
          company_url: "https://www.cheggindia.com/",
          logo_path: "chegg.jpg",
          duration: "March 2022 - Present",
          location: "Work From Home",
          description: [
            "⚡ Subject Matter Expert in Cmputer Science",
          ],
          color: "#ea7405",
        },
        {
          title: "Intern at Information Systems Department",
          company: "Indian Oil Corporation Ltd.",
          company_url: "https://iocl.com/pages/guwahati-refinery",
          logo_path: "iocl.jpg",
          duration: "July 2021 - August 2021",
          location: "Work From Home",
          description: [
            "⚡ Implemented a website which can used to monitor the persons in and out of IOCL department.",
            "⚡ It also provides the service to track the movement of persons.",
            "⚡ The same can be monitored via a dashboard by security admin.",
          ],
          color: "#0000FF",
        },
        {
          title: "Wed Development Intern",
          company: "The Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org/",
          logo_path: "tsf.jpg",
          duration: "June 2021 - July 2021",
          location: "Work From Home",
          description: [
            "⚡ Implemented a simple dynamic website where customers can transfer money between multiple users.",
            "⚡ The user can check the history of all transactions.",
          ],
          color: "#86DC3D",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Team Leader",
          company: "Kaziranga University",
          company_url: "https://kazirangauniversity.in/view/Kaziranga_University_organized_a_two_day_Technological_workshop_called_Techblitz/FZ21SDXYI6G4",
          logo_path: "tt.jpg",
          //duration: "2019/2020",
          //location: "Work From Home",
          description:
            "⚡ Team Leader of the technical event called “TechBlitz” organized by Kaziranga University 2019, 2020.",
          color: "#cec54d",
        },
        {
          title: "Coordinator",
          company: "Kaziranga University",
          company_url: "https://talenttantra.com/",
          logo_path: "tb.jpg",
          //duration: "2019/2020",
          //location: "Work from Home",
          description: "⚡ Coordinator of University fest called “Talent Tantra” and Annual week organized by Kaziranga University.",
          color: "#73b067",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create WebGIS dashboard Projects, Python Scripts, and Web development Project. Below are some of my projects and Practical record. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};


const projects = {
  data: [
    {
      id: "0",
      name: "WebGIS Dashboard of Small Tea Gradens",
      url: "https://github.com/Mrin45/WebGIS_Dashboard_of_TeaGradens",
      description: "Implemented a location-based Webgis Dashboard of tea gardens. It provides spatial information about the tea gardens.",
      languages: [
        {
          name: "Leaflet js",
          iconifyClass: "logos:leaflet",
        },
        {
          name: "HTML",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "D3 js",
          iconifyClass: "logos:d3",
        },
        {
          name: "Geoserver",
          iconifyClass: "logos:geoserver",
        },
      ],
    },
    {
      id: "1",
      name: "Practical Work (Geo-Spatial Technology)",
      url: "https://drive.google.com/drive/folders/1rktBKfQHNtIKRRrLgrih5poSsb4HnfgQ?usp=drive_link",
      description: "This are the some Geo-Spatial practcal work i have done using Geo-Spatial technology like Arc GIS, Erads Imagine, SAGA GIS, and Programing Language like Python, R.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "R",
          iconifyClass: "devicon:r",
        },
        {
          name: "ArcGIS",
          iconifyClass: "simple-icons:arcgis",
        },
        {
          name: "QGIS",
          iconifyClass: "simple-icons:qgis",
          
        },
      ],
    },
    {
      id: "2",
      name: "Basic-Banking-System",
      url: "https://github.com/Mrin45/Basic_Banking_System",
      description: "This is a Basic Banking System with dummy data in the database of 10 customers.",
      languages: [
        {
          name: "Php",
          iconifyClass: "logos-php",
        },
        {
          name: "HTML",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Bootstrap",
          iconifyClass: "bxl:bootstrap",
        },
        {
          name: "Mysql",
          iconifyClass: "logos:mysql",
        },
      ],
    },
    {
      id: "3",
      name: "Employee-Movement-Tracker",
      url: "https://github.com/Mrin45/Employee-Movement-Tracking-and-Monitoring-Website-for-IOCL",
      description:
        "A website was built which can be used to monitor the persons in and out of IOCL dept as part of security measure. This also provides the service to track the movement of persons.",
      languages: [
        {
          name: "Php",
          iconifyClass: "logos-php",
        },
        {
          name: "HTML",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Mysql",
          iconifyClass: "logos:mysql",
        },
      ],
    },
    {
      id: "4",
      name: "Age-and-Gender-Detection",
      url: "https://github.com/Mrin45/Age-and-Gender-Detection",
      description:
        "It can be predict the age and gender of a subject from image files, video files and camara stream.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "5",
      name: "Fetching-Weather-Information",
      url: "https://github.com/Mrin45/Fetching-Weather-Information",
      description:
        "Fetching current weather information with 3rd party API using python.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "6",
      name: "EtherPay",
      url: "https://github.com/umorjyoti/EtherPay",
      description:
        "Implemented a decentralized system which can be used to transfer ethereum from any from any crypto currency wallet to another.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Solidity",
          iconifyClass: "logos-solidity",
        },
        {
          name: "Vite",
          iconifyClass: "logos:vitejs",
        },
        {
          name: "Tailwind CSS",
          iconifyClass: "bxl:tailwind-css",
        },
      ],
    },
    {
      id: "7",
      name: "Hospital-Management-System",
      url: "",
      description:
        "This is a simple hospital system implemented in Javafx using material design principles.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
  ],
};
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Mrin11.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};


export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projects,
  contactPageData,
};
