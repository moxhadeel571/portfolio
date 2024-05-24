/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
// import spring from '../src/assets/icons/spring.png'
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohammed Shadeel",
  title: "Hi all, I'm Shadeel",
  subTitle: emoji(
    "      A passionate Full Stack Java Developer with expertise in Java, Spring Boot, and React.js.\n" +
      "                        I specialize in building robust backend systems and dynamic frontend interfaces. My experience includes accelerating project delivery, enhancing user engagement, and improving application efficiency.\n" +
      "                        Explore my projects to see how I leverage my skills to drive technological innovation.\n" +
      "                  "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/moxhadeel571",
  linkedin: "https://www.linkedin.com/in/mohammed-shadeel/",
  gmail: "muhammedshadeel571@gmail.com",
  medium: "https://medium.com/@muhammedshadeel571",
  stackoverflow: "https://stackoverflow.com/users/20151021/mdshadeel571",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY JAVA DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "SpringBoot",
      fontAwesomeClassname: "fas fa-leaf"

      // iconUrl: springspring
    },
    {
      skillName: "postman",
      fontAwesomeClassname: "fas fa-globe"
    },
    {
      skillName: "RESTFul API",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "ISL Engineering College",
      // logo: require("./assets/images/isl.png"),
      subHeader: "B.E in Computer Science Engineering",
      duration: "August 2018 - July 2022",
    },
    {
      schoolName: "Sri Gayatri Junior College",
      logo: require("./assets/images/gayatri.png"),
      subHeader: "Intermediate MPC (Science)",
      duration: "June 2015 - March 2018",
    },
    {
      schoolName: "St. Isaac Advent High School",
      // logo: require("./assets/images/isaac.png"), // Adjust this path as per your project's file structure
      subHeader: "SSC (High School)",
      duration: " 2002 -  March-2015", // Add your duration here
      // Additional description bullets if needed
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Java Full Stack Developer Intern",
      company:
          "The SmartBridge Educational Services Private Limited.",
      companylogo: require("./assets/images/SmartBridgewithVLSTag.png"),
      date: "May 2023 – May 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Accelerated project delivery by 20% through the implementation of Spring Boot.",
        "Facilitated virtual mentorship sessions, enhancing outcomes by 15% with expertise in\n" +
        "Spring MVC and RESTful APIs.",
        "Conducted over 20 code review and debugging sessions independently, improving\n" +
        "problem-solving skills in software projects by 30%.",
        "Developed 16 diverse projects utilizing various backend technologies, CSS properties, and\n" +
        "React for the frontend, resulting in a 25% increase in application efficiency and user\n" +
        "engagement."
      ]
    },


  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "DONE SOME PROJECTS BASED ON JAVA AND REACT DURING MY INTERNSHIP",
  projects: [
    {
      projectName: "Movie_Booking_system_SpringBoot",
      projectDesc: "A Modern Platform to book new movies with the help of real time Movie API which porvides real data of movies and booking platform to book tickets with Razer Pay as an option for payment",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/moxhadeel571/Movie_Booking_system_SpringBoot"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "HRMTOOL_SPRINGBOOT",
      projectDesc: "A compact HRM Tool developed with Spring Boot. Features include leave management, file handling, and more. Utilizes Gradle and Spring Boot starters. Improve your HR processes with this project.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/moxhadeel571/HRMTOOL_SPRINGBOOT"
        }
      ]
    },
    {
      projectName: "Customer_care-registry_SpringBoot",
      projectDesc: "Revolutionize customer care with our innovative registry system, streamlining and enhancing the customer support experience for seamless issue resolution and improved satisfaction.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/moxhadeel571/Customer_care-registry_SpringBoot"
        }
      ]
    },
    {
      projectName: "Medly_Pharma_SPringBoot",
      projectDesc: "A Pharma Store with 1500+ of Medicines and Drugs build in SpringBoot.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/moxhadeel571/Medly_Pharma_SPringBoot"
        }
      ]
    },
    {
      projectName: "Job_Portal_Master",
      projectDesc: "A job portal connects job seekers with employers. It offers job listings, search filters, resume upload, application management, and communication tools to streamline the job search process for both candidates and companies.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/moxhadeel571/Job_Portal_Master"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+91-6304324592",
  email_address: "muhammedshadeel571@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
