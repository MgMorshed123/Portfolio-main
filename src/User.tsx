import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import imag1 from "./img/img1.png";
import img3 from "./img/img3.png";
import imag7 from "./img/img7.png";

const Info = {
  name: "Golam Morshed",
  stack: [
    "MERN Stack Developer ",
    "Full Stack Developer",
    "Problem Solver ",
    "Software Engineer ",
  ],
  bio: "I am a passionate MERN stack developer and full-stack developer with a strong drive to create scalable, high-performing applications. With expertise in crafting seamless front-end experiences and robust back-end solutions, I specialize in building end-to-end solutions that deliver both functionality and scalability. I enjoy tackling complex challenges, optimizing performance, and contributing to impactful projects that make a difference.!",
};

const ProjectInfo = [
  {
    title: "HMI Medical",
    credentials: {
      normalUser: {
        email: "md45@gmail.com",
        password: "123456789",
      },
      adminUser: {
        email: "mdarfinji45@gmail.com",
        password: "23fefege",
      },
      Doctor: {
        email: "mji45@gmail.com",
        password: "12345678",
      },
    },

    desc: "HMI Medical is designed to connect patients with healthcare professionals seamlessly. The platform enables users to search for doctors, book appointments, and manage their medical records, while doctors can oversee their schedules and update their profiles. Admins can monitor the system, manage doctors, and oversee patient appointments efficiently.",
    image: imag7,
    live: true,
    technologies: [
      "React",
      "Tailwind CSS",
      "ShadCN",
      "Framer Motion",
      "Cloudinary",
      "JWT",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Multer",
    ],
    features: {
      patients: [
        "Search Doctors: Filter doctors by specialty and view their profiles.",
        "Book Appointments: Schedule consultations based on available slots.",
        "Manage Profile: Update personal details and medical history.",
        "Cancel Appointments: Cancel bookings with automatic notifications.",
      ],
      doctors: [
        "Manage Appointments: View, update, or cancel scheduled appointments.",
        "Profile Management: Edit specialties, availability, and fees.",
        "Earnings Reports: Track financial performance with reports.",
      ],
      administrators: [
        "Manage Doctors: Register and oversee doctor profiles.",
        "Monitor Appointments: View all appointments and update their status.",
        "User Management: Track patient and doctor activities.",
      ],
      additional: [
        "Authentication: Secure login and session management.",
        "Data Management: Real-time updates for all users.",
        "Responsive Design: Optimized for seamless access across devices.",
      ],
    },
    link: "https://doctors-portal-gokj.onrender.com",
    github: "https://github.com/MgMorshed123/Doctor-For-U-Frontend",
    server: "https://github.com/MgMorshed123/Doctor-For-U-Backend",
  },
  {
    title: "Career Canvas",
    credentials: {
      normalUser: {
        email: "mdarfinji45@gmail.com",
        password: "123456",
      },
      adminUser: {
        email: "smart@gmail.com",
        password: "1234567",
      },
    },
    desc: "Career Canvas is engineered to provide an intuitive and efficient user experience for job seekers and recruiters alike. Our platform leverages modern technologies to deliver robust functionality, ensuring that users can easily navigate job listings, apply for positions, and manage their profiles while administrators can effortlessly manage job postings, company registrations, and application statuses.",
    image: imag1,
    live: true,
    technologies: [
      "React",
      "Tailwind CSS",
      "SchadCn",
      "Framer Motion",
      "Cloudinary",
      "JWT",
      "MongoDB",
      "Express.js",
      "Node.js",
    ],
    features: {
      normalUsers: [
        "View Jobs: Browse through a variety of job opportunities available on the platform.",
        "Apply for Jobs: Submit applications for jobs that match your skills and interests.",
        "Search Jobs: Utilize the advanced search functionality to find specific job listings.",
        "Update Profile: Manage and update your personal profile information.",
      ],
      administrators: [
        "Create Jobs: Add new job postings to the platform with detailed descriptions.",
        "Create Companies: Register and manage companies on the portal.",
        "View Applications: Access and review job applications submitted by users.",
        "Update Application Status: Change the status of job applications as needed.",
      ],
      additional: [
        "Authentication: Secure user authentication, ensuring safe sign-in/out and session management.",
        "Data Management: Ensure data is kept updated throughout the user session.",
        "Responsive Design: Optimized for a seamless experience across all devices.",
      ],
    },

    link: "https://job-frontend-tg3r.onrender.com/",

    github: "https://github.com/MgMorshed123/ClientCarrer",
    server: "https://github.com/MgMorshed123/CarrerCanvasBackend",
  },
  {
    title: "Zomato ",
    live: true,
    credentials: {
      normalUser: {
        email: "mdarfinji45@gmail",
        password: "12345678",
      },
      adminUser: {
        email: " smart@gmail.com",
        password: "12345678",
      },
    },
    desc: "Zoomato is a dynamic food ordering website tailored to cater to both customers and administrators, ensuring a smooth and engaging experience. For customers, it offers features like adding items to the cart, secure checkout, searching for products, and tracking orders with real-time status updates. Administrators can effortlessly manage the platform by adding new products, deleting outdated items, managing orders, and updating order statuses to keep customers informed. With its intuitive design and comprehensive functionality, Zoomato makes food ordering and management simpler, faster, and more efficient for everyone",
    image: img3,
    technologies: [
      "React",
      "React Router DOM",
      "Tailwind css",
      "Framer Motion ",
      "CSS",
      "Node",
      " Express",
      " Mongoose ",
      "  MongoDb",
      "Jwt ",
    ],

    link: "https://zomato-i16i.onrender.com/",
    github: "https://github.com/MgMorshed123/TastyTales",
    server: "https://github.com/MgMorshed123/TastyTales-Backend",
  },
  {
    title: "Expense Tracker",
    desc: "Expense Tracker is a user-friendly platform for managing personal finances. Users can add, edit, and delete expenses, filter them by category or date, generate monthly reports, and export their current spending as a PDF. The system also includes OTP verification, password reset, and forgot password functionality for secure access. Default credentials are available in the GitHub repository. With its robust features and intuitive interface, Expense Tracker helps users efficiently manage and monitor their expenses.",
    image: "imag6",
    live: true,
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Node-cron",
      "Nodemailer",
    ],
    link: "http://expenss-tracker-frontend.onrender.com/",
    github: "https://github.com/MgMorshed123/Expenss-Tracker-Frontend",
    server: "https://github.com/MgMorshed123/Expenss-Tracker-Backend",
  },
  // {
  //   title: "Food Hub",
  //   desc: "Food Hub is a comprehensive food ordering platform for both users and administrators. Users can explore restaurants, sort by menu offerings, view detailed menus, place orders, make secure payments via Stripe, track order and payment statuses, and review their order history. Administrators can manage restaurant menus, update food availability, and oversee all orders efficiently. With its intuitive interface and robust features, Food Hub ensures a seamless experience for users and streamlined operations for administrators.",
  //   image: imag5,
  //   live: true,
  //   technologies: [
  //     "React",
  //     "Typescript",
  //     "Tailwind",
  //     "ShadCn",
  //     "Zustand",
  //     "Node",
  //     "Express",
  //     "MongoDB",
  //     "Cloudinary",
  //     "Multer",
  //     "JWT",
  //   ],
  //   link: "https://foodie-v4qd.onrender.com",
  //   github: "https://github.com/MgMorshed123/Food-Hub-Client-",
  //   server: "https://github.com/MgMorshed123/Food-HubServer",
  // },
  // {
  //   title: "Code Academy",
  //   desc: "Code Academy is a sleek and modern e-learning platform designed to enhance the online learning experience. Users can effortlessly browse through a variety of courses, toggle between light and dark themes for a personalized interface, and download course materials in PDF format for offline access. The platform also offers seamless login options via GitHub and Google, making it easy and secure for learners to get started. With its intuitive design and essential features, Code Academy provides a user-friendly and accessible solution for anyone looking to expand their knowledge and skills.",
  //   image: imag4,
  //   live: true,
  //   technologies: [
  //     "React",
  //     "React Router DOM",
  //     "Tailwind css",
  //     "Firebase",
  //     "AOS Animation library",
  //     "React-to-PDF",
  //     "Node",
  //     "Express",
  //     "MongoDb",
  //     "Jwt",
  //   ],
  //   link: "https://code-academy-client.web.app",
  //   github: "https://github.com/MgMorshed123/CodeAcademy-Client",
  //   server: "https://github.com/MgMorshed123/CodeAcademy-server",
  // },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "SHADCN UI",
      "Redux",
      "Zustand",
      "React Router",

      "Tailwind CSS",
      "Framer Motion",
      "Next JS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node JS",
      "Express JS",
      "MongoDB",
      "Mongoose",
      "JWT",
      "SQL",
      "Prisma",
      "Cloudinary",
      "Multer",
    ],
  },
  {
    title: "Languages",
    skills: ["C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: ["Github", "VS Code", "Postman"],
  },
];
const socialLinks = [
  { link: "https://github.com/MgMorshed123", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/golam-morshed-25a422281/",
    icon: IconBrandLinkedin,
  },
];

const ExperienceInfo = [
  {
    role: "Freelance Developer",
    company: "Self Employed",
    date: "Oct 2023 - Present",
    desc: "I am a freelance programmer specializing in full-stack web development. I create dynamic and responsive frontend and backend solutions using cutting-edge technologies like Node.js, Express.js, MongoDB, Tailwind CSS, and ShadCN. My expertise includes building e-commerce websites, restaurant websites, and custom web applications tailored to your business needs. With a focus on performance, user experience, and scalability, I deliver high-quality, reliable solutions that help your business thrive online. Let's collaborate to bring your ideas to life",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "SQL",
      "MongoDB",
      "Prisma",
      "Microservices",
    ],
  },
  {
    role: "Frondend Developer  Internship",
    company: " Lincoln University College ",
    date: "February 2025 - June 2025",
    desc: "During my internship as a Frontend Developer at Lincoln University College from September 2023 to December 2023, I worked closely with a team to design and develop responsive, user-friendly web interfaces. My primary responsibilities included creating and optimizing web pages using modern frontend technologies such as HTML, CSS, and JavaScript, while ensuring seamless cross-browser compatibility. I implemented interactive features to enhance user experience and collaborated with the backend team to integrate APIs effectively. Additionally, I participated in code reviews to maintain code quality and utilized version control systems like Git for efficient project management. This experience allowed me to sharpen my technical skills, improve problem-solving abilities, and gain hands-on experience in delivering high-quality web solutions.",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "SQL",
      "MongoDB",
      "Prisma",
      "Microservices",
    ],
  },
];
const Slugs = [
  "typescript",
  "react",
  "javascript",
  "redux",
  "zustand",
  "tailwindcss",
  "schadCn",
  "html5",
  "css3",
  "node",
  "express",
  "node",
  "mongodb",
  "prisma",
  "sql",
  "github",
  "microservices",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
