export type ProjectData = {
  id: string;
  desc: string;
  paras: string[];
  bullets: string[];
  features: string[];
  creationDate: string;
  projectType: string;
  techStack: string;
  imageUrl: string;
  interactUrl: string;
  interactText: string;
  flags: string[];
}

const flagNames: Map<string, string> = new Map([
  ['underConstruction', 'Under Construction']
]);

const Projects: ProjectData[] = [
  {id:"Community Minecraft Server", 
    desc:"This project was created as a way for me and a few friends to play Minecraft with one another without having to pay a monthly subscription to a hosting service. The project utilizes one of Oracle's free-tier cloud VM instances running Ubuntu 20.0.4 to host a Minecraft server along with a small Nginx site for the Pterodactyl Pane, an open-source hosting solution for games like Minecraft, Rust, and CS:GO.", 
    paras:[""], 
    bullets: ["Architected and deployed a Minecraft server on Oracle Cloud VM running Linux OS, supporting up to 20 friends and community members while managing server performance and resource optimization.",
      "Developed containerized server deployment using Docker and Pterodactyl Panel, reducing setup and maintenance time by 60% and enabling streamlined management of multiple server instances.", 
      "Implemented Cloudflare DNS and CDN services for custom domain management and DDoS protection, improving connection stability and reducing latency by 30% for players with low internet speeds."], 
    features:["Fast, comprehensive management site using Pterodactyl Panel", "Custom domain name with Cloudflare, DDoS protection, and more", 
      "SFTP file transfer for easily updating game configurations/setups","4x OCPU cores with 24GB of RAM, and 50GB of storage provided with Oracle's Always Free cloud compute plan"],
      creationDate:"Aug 2024", 
    projectType:"Oracle Cloud Server Instance", 
    techStack:"Oracle, Docker, Pterodactyl Panel, Nginx, MariaDB", 
    imageUrl:"/assets/images/oracle-server.png", 
    interactUrl:"",
    interactText:"",
    flags: ["noParas"]
  },
  
    {id:"Game Session Manager", 
    desc:"This project is a session management microservice designed for interacting with P2P session systems in multiplayer games. Games should interact with the API server to create, read, update, and delete user, session, and message data held within the database container. This project is meant to be a lightweight and self-contained solution for games that utilize P2P multiplayer, but don't want/need to implement relay server overhead.", 
    paras:[""], 
    bullets: ["Designed a lightweight Python microservice with FastAPI for managing user friendships and game sessions, allowing for optimized real-time data interactions between game clients without a continuous connection.",
      "Built scalable backend infrastructure by containerizing the FastAPI service with Docker as well as a PostgreSQL database, allowing for dynamic data storage and swift deployment.", 
      "Implemented JWT-based authentication and authorization in conjunction with OAuth2 for simple and secure user login functionality, preventing unauthorized access to sensitive information."], 
    features:["User authentication using OAuth2, password hashing with BCrypt and JWT Token authentication flow", "Dockerized database/API combination makes for easy deployment and configuration", 
      "PostgreSQL database allows for easily processing JSON and JSONB data, and provides good performance for realtime data interactions"],
      creationDate:"July 2025",
    projectType:"Microservice", 
    techStack:"Python, FastAPI, PostgreSQL, Docker", 
    imageUrl:"/assets/images/postman_smm_image.png", 
    interactUrl:"https://github.com/JDubbs89/session-management-microservice", 
    interactText:"View on Github",
    flags: ["noParas"]},
  
    {id:"Grace Church Website Revamp", 
    desc:"Grace Church is one of the oldest Baptist churches in Michigan - over 100 years old! That said, the current website at the time of writing this is quite outdated (not 100 years outdated, but certainly not modern either.) This project is made to give the church's site a little bit of a facelift - Next.js allows for easy front and backend functionality while making the site look great.", 
    paras:[""], 
    bullets: ["Designing and building a modern responsive webpage as a redesign of the current Grace Church official website, improving readability and user experience, as well as better organizing church information.",
      "Using Next.js, Typescript, and TailwindCSS to develop a robust and performant site framework utilizing best practices to ensure a strong and maintainable project structure.", 
      "Working with members of Grace Church to ensure that the website aligns with user needs, collaborating with current website management team to ensure smooth project integration as well as compliance with church standards."], 
    features:["Sleek, modern user interface using TailwindCSS", "API endpoints for data interactions involving site content including sermon series, calendar events, and other dynamic data",
      "Advanced permissions system and authentication flow, allowing for robust site content management","Analytics dashboard for site admins including device type, retention time, etc."],
      creationDate:"Aug 2025", 
    projectType:"Website", 
    techStack:"Next.js, Typescript, TailwindCSS", 
    imageUrl:"/assets/images/grace-website-revamp.png", 
    interactUrl:"https://github.com/JDubbs89/Grace-Church-Website-Revamp", 
    interactText:"View on Github",
    flags: ["underConstruction","noParas"]
  }
];

export function get_project(projectId:string): ProjectData {
  for (let i = 0; i < Projects.length; i++) {
    if (Projects[i].id === projectId) {
      return Projects[i];
    }
  }
  return {
    id:"", 
    desc:"", 
    paras:[""], 
    bullets: [""], 
    features:[""],
    creationDate:"", 
    projectType:"", 
    techStack:"", 
    imageUrl:"", 
    interactUrl:"", 
    interactText:"",
    flags:[]
  };
}

export function get_projects(): ProjectData[] {
  return Projects;
}

export function get_tagname(flag:string): string {
  var name:string | undefined = flagNames.get(flag);
  if (name) {
    return name;
  }
  return "";
}


export function has_any_flags(data:ProjectData, target_flags: string[]): boolean{
  console.log(data.id)
  if(data.flags.length <= 0){
    return false;
  }
  for (let i = 0; i < data.flags.length; i++){
    for (let j = 0; j < target_flags.length; j++)
      if (data.flags[i] === target_flags[j]){
        return true;
      }
    console.log(data.flags[i])
  }
  return false;
}