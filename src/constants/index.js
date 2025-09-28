import Project from '../assets/project.png'
import Samuella from '../assets/team/Samuella.jpg'
import Godwin from '../assets/team/Godwin.jpg'
import Daniel from '../assets/team/img3.jpg'
import Gabriel from '../assets/team/gabriel.jpg'
import Ephraim from '../assets/team/ephraim.jpg'
import Frank from '../assets/team/img1.jpg'
import victoria from '../assets/team/victoria.JPG'
import Temiperi from '../assets/projects/temiperi.png'
import Temiperi2 from '../assets/projects/temiperi2.jpg'
import Temiperi3 from '../assets/projects/temiperi3.jpg'
import Malawi from '../assets/projects/malawi.png'
import Malawi2 from '../assets/projects/malawi2.jpg'
import Malawi3 from '../assets/projects/malawi3.jpg'
import Nii2 from '../assets/projects/nii2.jpg'
import Nii3 from '../assets/projects/nii3.jpg'
import Nii from '../assets/projects/nii.png'
import Test from '../assets/testimonial/img1.png'
import Maraim from '../assets/testimonial/mariam.jpg'
import Linda from '../assets/testimonial/linda.jpg'
import Mavarta from '../assets/testimonial/male_avatar.png'
import Favarta from '../assets/testimonial/female_avatar.png'
import Cepta from '../assets/projects/cepta.jpg'
import { FaCode, FaLaptopCode, FaDatabase, FaDraftingCompass, FaChalkboardTeacher, FaCogs } from 'react-icons/fa';
import { MdAppShortcut, MdOutlineCampaign } from 'react-icons/md';
import { AiOutlineTool } from 'react-icons/ai';
import { FiShield } from 'react-icons/fi';
import { RiPlugFill } from 'react-icons/ri';
import { GiFeather } from 'react-icons/gi';

export const team = [
    {
        image: Ephraim, 
        name: "Ephraim Tetteh Apetorgbor", 
        role: "CEO",
        bio: "A software developer, data scientist amd machine learning developer. I am a dedicated, passionate committed multi-programmer with a deep passion for coding and security. My journey in the world of technology has been an exciting adventure, and I'm always up for the challenge of creating innovative solutions. I firmly believe believe in my skills, constantly seeking to learn grow, and contribute to the tech community while staying true to my faith-inspired principles.",
        expertise: [
            "Quality Assurance",
            "Test Automation",
            "CI/CD Implementation",
            "Performance Testing",
            "API Testing"
        ],
        experience: [
            {
                position: "CEO",
                company: "aeTech Digital Hub",
                duration: "2024 - Present",
                description: "Lead a team of 5 QA engineers, implemented automated testing frameworks that reduced testing time by 60%"
            },
            {
                position: "Software Developer",
                company: "Adiphraim - Freelance",
                duration: "2024 - 2024",
                description: "Developed and maintained test suites for web and mobile applications"
            },
            {
                position: "Software Developer",
                company: "aes - Freelance",
                duration: "2022 - 2024",
                description: "Developed and maintained test suites for web and mobile applications"
            }
        ],
        education: {
            degree: "Software Development",
            institution: "University of Ghana",
            // year: "2020 - 2024"
        },
        certifications: [
            "AWS Certified Developer",
            "ISTQB Advanced Level Test Automation Engineer",
            "Selenium Certified Professional"
        ],
        social: {
            linkedin: "https://linkedin.com/in/robert-langosh",
            github: "https://github.com/rlangosh",
            twitter: "https://twitter.com/rlangosh"
        }
    },
    {
        image: Samuella, 
        name: "Samuella Arthur", 
        role: "General Manager",
        bio: "A passionate engineer with over 8 years of experience in quality assurance and product development. Specializing in automated testing frameworks and continuous integration pipelines.",
        expertise: [
            "Quality Assurance",
            "Test Automation",
            "CI/CD Implementation",
            "Performance Testing",
            "API Testing"
        ],
        experience: [
            {
                position: "Senior QA Engineer",
                company: "Tech Solutions Inc.",
                duration: "2020-Present",
                description: "Lead a team of 5 QA engineers, implemented automated testing frameworks that reduced testing time by 60%"
            },
            {
                position: "QA Engineer",
                company: "Digital Innovations Ltd",
                duration: "2017-2020",
                description: "Developed and maintained test suites for web and mobile applications"
            }
        ],
        education: {
            degree: "B.Sc. Computer Science",
            institution: "University of Technology",
            // year: "2016"
        },
        certifications: [
            "AWS Certified Developer",
            "ISTQB Advanced Level Test Automation Engineer",
            "Selenium Certified Professional"
        ],
        social: {
            linkedin: "https://linkedin.com/in/robert-langosh",
            github: "https://github.com/rlangosh",
            twitter: "https://twitter.com/rlangosh"
        }
    },
    {
        image: victoria, 
        name: "Victoria Boateema", 
        role: "Frontend Developer",
        bio: "A highly adaptable and goal-driven with strong verbal communication, interpersonal, and data management skills. I am a team-oreinted professional with excellent organizational and problem-solving abilities. I thrive in fast-paced environments and collaborate effectively with others to acheive goals efficiently and successfully.",
        expertise: [
            "Good verbal and communication skills",
            "Proficient in Microsoft Word and PowerPoint",
            "Proficient in data entry",
            "Solid Understanding of social media platforms and engagement strategies",
            "API Testing"
        ],
        experience: [
            {
                position: "Intern",
                company: "Ghana Revenue Authority",
                duration: "2019-Present",
                description: "Participated in outdoor compliance activities, enhancing taxpayer outreach and engagement."
            },
            {
                position: "Part-Time Personal Assistant. (Content Creation).",
                company: "Kwadwo Sheldon Studios",
                duration: "2022-2022",
                description: "Managed production equipment and aided in YouTube uploads, contributing to an increase in content engagement."
            },
            {
                position: "National Service Personnel (Finance & Economic Cluster Committee)",
                company: "Parliament House of Ghana",
                duration: "2022-2023",
                description: "Facilitated correspondence distribution and meeting observations, strengthening interdepartmental communication."
            },
        ],
        education: {
            degree: "Master of Arts (M.A.) in International Affairs",
            institution: "University of Ghana",
            // year: "2023 - 2024"
        },
        // certifications: [
        //     "AWS Certified Developer",
        //     "ISTQB Advanced Level Test Automation Engineer",
        //     "Selenium Certified Professional"
        // ],
        social: {
            linkedin: "https://linkedin.com/in/robert-langosh",
            github: "https://github.com/rlangosh",
            twitter: "https://twitter.com/rlangosh"
        }
    },
    {
        image: Gabriel, 
        name: "Gabriel Kwame Addo Quainoo", 
        role: "Frontend Engineer",
        bio: "I am a motivated and enthusiastic professional full-stack software engineer for both web and mobile apps with a strong passion for developing scalable web and mobile applications and solving real-life problems through technology with a solid computer science and mathematics foundation. Committed to developing user friendly and scalable software solutions to enhance user experiences. Seeking opportunities to contribute to innovative projects and collaborate with talented teams.",
        expertise: [
            "Frontend Development",
            "UI/UX Design",
            "Database Management",
            "API Integration",
            "Mobile App Development"
        ],
        experience: [
            {
                position: "Intern",
                company: "Ideation Axis",
                duration: "2024 - 2024",
                description: "Collaborated with a team to design and implement a user interface and user experience for a project platform."
            }
        ],
        education: {
            degree: "B.Sc. Computer Science",
            institution: "University of Ghana",
            // year: "2023 - 2026"
        },
        certifications: [
            "Social Justice Hackathon",
            "Mini-Medi Hackathon",
            "Software Development Bootcamp"
        ],
        social: {
            linkedin: "https://linkedin.com/in/robert-langosh",
            github: "https://github.com/rlangosh",
            twitter: "https://twitter.com/rlangosh"
        }
    },
    // {
    //     image: Ken, 
    //     name: "Kenneth Ashartey", 
    //     role: "UI/UX Designer",
    //     bio: "A UI/UX Designer with over two years of experience looking to build impressive digital products. Creative problem solver with a passion for innovation and a deep understanding of design principles. Skilled in creating visually stunning interfaces and optimizing user experiences.",
    //     expertise: [
    //         "UI/UX Design",
    //         "User Centric Design",
    //         "Good communication skills",
    //     ],
    //     experience: [
    //         {
    //             position: "Finance Officer",
    //             company: "Bargains Center Limited",
    //             duration: "2023 - 2024",
    //             description: "Oversaw all accounting functions, including general ledger management, financial statement preparation, and month-end closing processes."
    //         },
    //         {
    //             position: "Audit Associate",
    //             company: "SNG Pedabo Associates",
    //             duration: "2022 - 2024",
    //             description: "Assisted in conducting external audits for a range of clients, including private, external and non-profit organizations."
    //         },
    //     ],
    //     education: {
    //         degree: "B.Sc. Business Adminstration",
    //         institution: "Kwame Nkrumah University of Science and Technology",
    //         // year: "2018 - 2022"
    //     },
    //     certifications: [
    //         "ALX Financial Analyst Program",
    //         "KPMG virtual Experience in Audit and Assurance",
    //         "PwC Virtual Experience Program in Digital Assurance"
    //     ],
    //     social: {
    //         linkedin: "https://linkedin.com/in/robert-langosh",
    //         github: "https://github.com/rlangosh",
    //         twitter: "https://twitter.com/rlangosh"
    //     }
    // },
    {
        image: Daniel, 
        name: "Daniel Aghedo", 
        role: "UI/UX Designer",
        bio: "Passionat entry-level UI/UX designer with one year of experience working on community-driven projects. Skilled in user-centered design, wireframing, prototyping, and usability testing, with a strong foundation in Figma. Eager to bring my creativity, problem-solving abilities, and design skills to a team where I can contribute and continue learning.",
        expertise: [
            "UI/UX Design",
            "User Centric Design",
            "Good communication skills",
            "Proficient in Figma and Framer",  
            "Visual design",  
        ],
        experience: [
            {
                position: "UI/UX Designer",
                company: "Freelance and community projects",
                duration: "2023 - present",
                description: "Collaborated with members of a desihn community to complete various design tasks, including user research, crafting wireframes, and interactive prototypes."
            }
        ],
        education: {
            degree: "B.Sc. Library and Information Science",
            institution: "University of Benin",
            // year: "2018 - 2022"
        },
        certifications: [
            "ALX Financial Analyst Program",
            "KPMG virtual Experience in Audit and Assurance",
            "PwC Virtual Experience Program in Digital Assurance"
        ],
        social: {
            linkedin: "https://linkedin.com/in/robert-langosh",
            github: "https://github.com/rlangosh",
            twitter: "https://twitter.com/rlangosh"
        }
    },
    {
        image: Frank, 
        name: "Frank", 
        role: "Videographer",
        bio: "Passionat entry-level UI/UX designer with one year of experience working on community-driven projects. Skilled in user-centered design, wireframing, prototyping, and usability testing, with a strong foundation in Figma. Eager to bring my creativity, problem-solving abilities, and design skills to a team where I can contribute and continue learning.",
        expertise: [
            "UI/UX Design",
            "User Centric Design",
            "Good communication skills",
            "Proficient in Figma and Framer",  
            "Visual design",  
        ],
        experience: [
            {
                position: "UI/UX Designer",
                company: "Freelance and community projects",
                duration: "2023 - present",
                description: "Collaborated with members of a desihn community to complete various design tasks, including user research, crafting wireframes, and interactive prototypes."
            }
        ],
        education: {
            degree: "B.Sc. Library and Information Science",
            institution: "University of Benin",
            // year: "2018 - 2022"
        },
        certifications: [
            "ALX Financial Analyst Program",
            "KPMG virtual Experience in Audit and Assurance",
            "PwC Virtual Experience Program in Digital Assurance"
        ],
        social: {
            linkedin: "https://linkedin.com/in/robert-langosh",
            github: "https://github.com/rlangosh",
            twitter: "https://twitter.com/rlangosh"
        }
    },
]

export const head =[
    {image: Ephraim, name: "Ephraim Tetteh Apetorgbor", role: "CEO", testimonial: "AeTech is a top tech company that helps build softwares for bigger organizations."},
    {image: Samuella, name: "Samuella Langosh", role: "General Manager", testimonial: "AeTech is a top tech company that helps build softwares for bigger organizations."},
    {image: Godwin, name: "Samuella Langosh", role: "General Manager", testimonial: "AeTech is a top tech company that helps build softwares for bigger organizations."},
]

export const services = [
  { title: "Software Development", skills: ["Frontend Development", "Backend Development", "Fullstack Development", "UI/UX Development"], icon: FaCode },
  { title: "Web Development", skills: ["Developing dynamic and interactive web application.", "Implementing features like e-commerce, content, management systems or SASS platforms.","Developing server-side logic, APIs and Databases.", "Implementing functionalities like authentication, data processing and business logic."], icon: FaLaptopCode },
  { title: "App Development", skills: ["Android", "IOS", "Cross Platform"], icon: MdAppShortcut },
  { title: "Product Design", skills: ["Customer made design."], icon: FaDraftingCompass },
  { title: "Software Maintenance and Upgrade", skills: ["Providing ongoing support and updates to ensure software functionality.", "Implementing features enhancements and security patterns.", "Monitoring & resolving post-deployment issues."], icon: FaCogs },
  { title: "Custom Software Solutions", skills: ["Android", "IOS", "Cross Platform"], icon: AiOutlineTool },
  { title: "CyberSecurity Implementation", skills: ["Ensuring software security through encryption, authentication and vulnerability testing.", "Protecting applications against cyber threats."], icon: FiShield },
  { title: "Database Management", skills: ["Designing, creating and maintaining database.", "Ensuring data security, scalability and performance.", "Using relational (eg. MySQL, PostgreSQL, MongoDB, Firebase database."], icon: FaDatabase },
  { title: "Integration with third-party Systems", skills: ["Connecting software with APIs, tools, and services like Payment gateways, CRMs and ERDs", "Ensuring seamless interoperability between systems."], icon: RiPlugFill },
  { title: "Marketing", skills: ["Social Media Marketing", "Digital Marketing"], icon: MdOutlineCampaign },
  { title: "Branding", skills: ["Brand Identity Design"], icon: GiFeather },
  { title: "Cyber Education", skills: ["Cyber Security Training"], icon: FaChalkboardTeacher },
];

export const testimonials = [
    {
      id: 1,
      image: Mavarta,
      name: 'Stanley',
      position: 'CEO, Tarkoradi Caffe',
      message: 'This team exceeded all our expectations. Their innovative approach and professionalism were unparalleled.',
    },
    {
      id: 2,
      name: 'Mariam Osman',
      image: Maraim,
      position: 'CEO, Malawi Village, Zegher',
      message: 'Working with this team was a fantastic experience. They delivered results on time and beyond expectations.',
    },
    {
      id: 3,
      name: 'Linda Akiss',
      image: Linda,
      position: 'Founder, Temiperi Enterprise',
      message: 'They have a built a system that helped me minize my capital loss to zero. the fun part, I can use the system from anywhere',
    },
    {
      id: 4,
      name: 'Sharaf Abdalla',
      image: Mavarta,
      position: 'Manager, Tramove Logistics',
      message: 'Their boss is a good guy. He should keep the good work',
    },
    {
      id: 5,
      name: 'Mr. Bendu',
      image: Mavarta,
      position: 'Founder, Bendu Village',
      message: 'Their attention to detail and commitment to quality are unmatched. Highly recommended!',
    },
  ];

export const work = [
    {
        images: [Temiperi, Temiperi2, Temiperi3], 
        title: "Temiperi Enterprise", 
        description: "Temiperi Enterprise specializes in the wholesale and retail of drinks. This software is designed to track progress, ensuring smooth operations and efficient management."
    },
    {
        images: [Malawi, Malawi2, Malawi3], 
        title: "Malawi Village", 
        description: "Malawi Village offers fresh, tasty juices and a variety of bitter and sweet teas with excellent health benefits. Designed a responsive e-commerce platform for Malawi Village. The website includes an intuitive product catalog, secure payment options, and a user-friendly interface, promoting their healthy beverages and enhancing customer convenience."
    },
    {
        images: [Nii, Nii2, Nii3], 
        title: "Nii Kwei Ministry", 
        description: "Nii Kwei Ministry is dedicated to promoting gospel music and supporting spiritual growth. It offers church goods like shirts, hoodies, Bibles, and more, creating a space for faith expression and community building."
    },
    {
        images: [Cepta, Cepta, Cepta], 
        title: "Cepta IT", 
        description: "Cepta IT specializes in providing high-quality laptops, gadgets, and accessories to meet diverse customer needs. Developed a responsive e-commerce platform for Cepta IT. The website features a dynamic product catalog, secure checkout, and an admin dashboard for inventory and order management, enhancing customer experience and boosting online sales."
    },
]

export const pricing = [
    {price: 0, plan: "Free Plan", button: "Get Started", listing: ["We offer an solve problems", "We offer an solve problems","We offer an solve problems", "We offer an solve problems"]},
    {price: 0, plan: "Free Plan", button: "Free Trial", listing: ["We offer an solve problems", "We offer an solve problems","We offer an solve problems", "We offer an solve problems"]},
    {price: 0, plan: "Free Plan", button: "Enterprise", listing: ["We offer an solve problems", "We offer an solve problems","We offer an solve problems", "We offer an solve problems"]},
]
