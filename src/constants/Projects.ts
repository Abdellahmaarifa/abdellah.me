import { ProjectType } from "../../types/projects.type";
import LibftIcon from "../assets/tool-box.png";
import GetNextLineIcon from "../assets/get_next_line_icon.png";
import PrintfIcon from "../assets/printf.png";
import BornIcon from "../assets/born.png";
import SolongIcon from "../assets/so_long.png";
import PipexIcon from "../assets/pipex.png";
import PushSwapIcon from "../assets/push_swap.png";
import MinishellIcon from "../assets/minishell.png";
import CubeIcon from "../assets/cube3d.png";
import NetPracticeIcon from "../assets/netpractice.png";
import CPlusPlusIcon from "../assets/c++.png";
import InceptionIcon from "../assets/inception.png";
import WebserverIcon from "../assets/webserver.png";
import TransadenceIcon from "../assets/transandence.png";
import PhiloIcon from "../assets/philosopher.png";

interface ProjectsType {
  libft: ProjectType;
  getNextLine: ProjectType;
  printf: ProjectType;
  born: ProjectType;
  solong: ProjectType;
  pushSwap: ProjectType;
  minishell: ProjectType;
  cube: ProjectType;
  cPlusPlus: ProjectType;
  netPractice: ProjectType;
  inception: ProjectType;
  webserver: ProjectType;
  philo: ProjectType;
  pipex: ProjectType;
  transadence: ProjectType;
}

export const PROJECTS: ProjectsType = {
  libft: {
    name: "Libft",
    image: LibftIcon,
    stack: ["C"],
    description:
      "Libft is a that project involves implementing custom \
      versions of standard library functions, such as strlen and strcpy, along with utility functions that become \
      fundamental tools for future projects",
    subjectLink:
      "https://github.com/Abdellahmaarifa-1337/Libft/blob/master/subject/en.subject.pdf",
    githubLink: "https://github.com/Abdellahmaarifa-1337/Libft",
  },
  getNextLine: {
    name: "Get Next Line",
    image: GetNextLineIcon,
    stack: ["C"],
    description:
      "project is an essential utility designed to read content line by line, whether from a file, standard input (stdin), or even a network connection",
    subjectLink:
      "https://github.com/Abdellahmaarifa-1337/get_next_line/blob/main/subject/en.subject.pdf",
    githubLink: "https://github.com/Abdellahmaarifa-1337/get_next_line",
  },
  printf: {
    name: "Printf",
    image: PrintfIcon,
    stack: ["C"],
    description:
      "This project serves as a comprehensive introduction to variadic functions, providing insights into their functionality and implementation. Once validated, this custom printf function becomes a reusable tool for formatting output and will play a vital role in future projects.",
    subjectLink:
      "https://github.com/Abdellahmaarifa-1337/ft_printf/blob/master/subject/en.subject.pdf",
    githubLink: "https://github.com/Abdellahmaarifa-1337/ft_printf",
  },
  born: {
    name: "Born2beroot",
    image: BornIcon,
    stack: ["Linux"],
    description:
      "The Born2beroot project marks the initiation into the fascinating realm of virtualization. It is designed to provide a foundational understanding of virtualization technologies and their applications.",
    subjectLink:
      "https://github.com/Abdellahmaarifa-1337/Born2beroot/blob/main/subject/en.subject.pdf",
    githubLink: "https://github.com/Abdellahmaarifa-1337/Born2beroot",
  },
  solong: {
    name: "so_long",
    image: SolongIcon,
    stack: ["C"],
    description:
      "The so_long project is an immersive exploration into the world of game development using the minilibx library. This project offers hands-on experience with creating a small 2D game, delving into essential concepts such as textures, sprites, and tiles.",
    subjectLink:
      "https://github.com/Abdellahmaarifa-1337/so_long/blob/main/subject/en.subject.pdf",
    githubLink: "https://github.com/Abdellahmaarifa-1337/so_long",
  },
  pushSwap: {
    name: "push_swap",
    image: PushSwapIcon,
    stack: ["C"],
    description:
      "The push_swap project is a challenging exploration into sorting data on a stack using a limited set of instructions and minimizing the number of moves",
    subjectLink:
      "https://github.com/Abdellahmaarifa-1337/push_swap/blob/main/subject/en.subject.pdf",
    githubLink: "https://github.com/Abdellahmaarifa-1337/push_swap",
  },
  minishell: {
    name: "minishell",
    image: MinishellIcon,
    stack: ["C"],
    description:
      "In the mini-shell Creation project, the goal was to conceive and implement a straightforward yet functional shell—a fundamental component of operating systems.",
    subjectLink:
      "https://github.com/Abdellahmaarifa-1337/minishell/blob/main/subject/en.subject.pdf",
    githubLink: "https://github.com/Abdellahmaarifa-1337/minishell",
  },
  cube: {
    name: "cub3d",
    image: CubeIcon,
    stack: ["C"],
    description:
      "Embark on a captivating journey inspired by the world-famous 90's first-person shooter. \
      The cub3d Maze Exploration project invites exploration into the fascinating \
      realm of ray-casting.",
    subjectLink:
      "https://github.com/Abdellahmaarifa-1337/cub3d/blob/master/subject/en.subject.pdf",
    githubLink: "https://github.com/Abdellahmaarifa-1337/cub3d",
  },
  cPlusPlus: {
    name: "c++",
    image: CPlusPlusIcon,
    stack: ["c++"],
    description:
      "a series of exercises targeting essential concepts in C++, with a specific focus on inheritance, IO operations, polymorphism, casting, and exception handling. Each exercise is designed to reinforce fundamental principles and enhance proficiency in core C++ features",
    subjectLink:
      "https://github.com/Abdellahmaarifa-1337/cplusplus/tree/main/subjects",
    githubLink: "https://github.com/Abdellahmaarifa-1337/cplusplus",
  },
  netPractice: {
    name: "NetPractice",
    image: NetPracticeIcon,
    stack: ["networking"],
    description:
      "a series of guided exercises, participants have the opportunity to gain firsthand experience in networking principles, protocols, and practices.",
    subjectLink:
      "https://github.com/Abdellahmaarifa-1337/NetPractice/blob/main/subject/en.subject.pdf",
    githubLink: "https://github.com/Abdellahmaarifa-1337/NetPractice",
  },
  inception: {
    name: "Inception",
    image: InceptionIcon,
    stack: ["docker"],
    description:
      "The Inception project is a comprehensive exploration of system administration, specifically focusing on the powerful tool, Docker",
    subjectLink:
      "https://github.com/Abdellahmaarifa-1337/inception/blob/master/subject/en.subject.pdf",
    githubLink: "https://github.com/Abdellahmaarifa-1337/inception",
  },
  webserver: {
    name: "webserv",
    image: WebserverIcon,
    stack: ["C++"],
    description:
      "The webserv project is a unique and hands-on opportunity to delve into the inner workings of the internet by building your own HTTP server",
    subjectLink:
      "https://github.com/Abdellahmaarifa-1337/webServer/blob/main/subject/en.subject.pdf",
    githubLink: "https://github.com/Abdellahmaarifa-1337/webServer",
  },
  pipex: {
    name: "pipex",
    image: PipexIcon,
    stack: ["C"],
    description:
      "a comprehensive dive into two essential concepts: Redirections and Pipes. Designed as a foundational introduction, this project goes beyond the basics, providing a nuanced understanding of these fundamental UNIX operations",
    subjectLink:
      "https://github.com/Abdellahmaarifa-1337/pipex/blob/main/subject/en.subject.pdf",
    githubLink: "https://github.com/Abdellahmaarifa-1337/pipex",
  },
  philo: {
    name: "Philosophers",
    image: PhiloIcon,
    stack: ["C"],
    description:
      " dynamic simulation where philosophers alternated between eating, thinking, and sleeping. Demonstrated expertise in threading and concurrent programming, ensuring precise timing and avoiding starvation",
    subjectLink:
      "https://github.com/Abdellahmaarifa-1337/philosophers/blob/master/subject/en.subject.pdf",
    githubLink: "https://github.com/Abdellahmaarifa-1337/philosophers",
  },
  transadence: {
    name: "Transadence",
    image: TransadenceIcon,
    stack: ["typescript"],
    description:
      "a feature-rich online Pong game equipped with an integrated chat system. The chat functionality includes public, private, and protected rooms, facilitating diverse interaction modes",
    subjectLink: "https://github.com/Abdellahmaarifa/overPing",
    githubLink: "https://github.com/Abdellahmaarifa/overPing",
  },
};

export const CERTS = {
  cs50: "https://courses.edx.org/certificates/88141f59f37f4d1cb0b6d3c5f0cd7594?_gl=1*xa2guk*_ga*MTI2NTc0MjI4MC4xNzAxNjIwMDkz*_ga_D3KS4KMDT0*MTcwMTYyMDA5My4xLjEuMTcwMTYyMDExNi4zNy4wLjA.",
};
