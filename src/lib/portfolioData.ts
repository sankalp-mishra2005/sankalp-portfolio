export const personalDetails = {
  name: "Sankalp Mishra",
  profile_picture: {
    imgix_url: "/pfp.jpg"
  },
  roles: [
    { role: "MERN Stack Developer" },
    { role: "Spring Boot Engineer" },
    { role: "AI & ML Specialist" }
  ],
  highlights: [
    { image: { url: "/highlights/high1.svg" } },
    { image: { url: "/highlights/high2.svg" } },
    { image: { url: "/highlights/high3.svg" } }
  ]
}

export const aboutData = {
  name: "Sankalp Mishra",
  picture: {
    url: "/pfp.jpg"
  },
  role: "AI & ML & Full Stack Developer",
  location: "Bhilai, India",
  resume: "/Sankalp_resume.pdf",
  description: `I'm a software developer based in India, passionate about building scalable, secure, and intelligent applications. My expertise spans full-stack engineering and artificial intelligence, with a focus on MERN stack, Spring Boot, Python, and machine learning models.

I love building systems that combine intelligent algorithms with robust, clean software architectures. What began as a curiosity about artificial intelligence and programming quickly evolved into a commitment to engineering high-performance solutions that solve complex real-world problems.

From developing gesture-controlled touchless drawing platforms to AI mock interviewing systems and automated cloud deployment tools, I enjoy translating complex technical challenges into user-centric products. I focus on developing modular RESTful APIs, optimized databases, and clean, responsive interfaces.

With strong attention to detail, efficiency, and code quality, I strive to build reliable products and form strong collaborative connections with teams and clients.`,
  signature: {
    url: "/signature.svg"
  },
  experiences: [
    {
      start_at: "2026-06-01",
      end_at: undefined,
      company: "Steel Authority of India Limited (SAIL)",
      role: "Project Trainee Intern",
      job_description: `* Engineered an enterprise Employee Management System utilizing **Spring Boot** and **Oracle Database**, streamlining record-keeping processes.
* Architected secure, modular **RESTful APIs** to facilitate seamless employee data transactions and optimize database performance.
* Implemented modular layered architecture with **Spring Data JPA** integration, ensuring high maintainability and system robustness.
* Executed comprehensive testing and API debugging via **Postman**, adhering to industrial development standards.`,
      company_logo: {
        url: "/companies/sail.png"
      }
    }
  ],
  education: [
    {
      start_at: "2023-08-01",
      end_at: "2027-05-30",
      institution: "Vellore Institute of Technology",
      course: "B.Tech in Computer Science and Engineering (AI & ML Specialization)",
      institution_logo: {
        url: "/education/vit.png"
      }
    }
  ],
  services: [
    {
      title: "Full-Stack Development",
      description: "Building robust, scalable applications using React, Node.js, Express, and Spring Boot.",
      icon: "FiCode"
    },
    {
      title: "AI & Machine Learning",
      description: "Developing computer vision and predictive models using Python, OpenCV, and Flask.",
      icon: "FiCpu"
    },
    {
      title: "Database Management",
      description: "Designing and optimizing databases using MongoDB, SQL, and Oracle Database.",
      icon: "FiDatabase"
    },
    {
      title: "API & System Design",
      description: "Architecting and testing RESTful APIs with clean, modular layered architecture.",
      icon: "FiLayers"
    }
  ]
}

export const socialsData = [
  {
    slug: "mail",
    title: "Mail",
    metadata: {
      url: "mailto:mishrasankalp2005@gmail.com",
      iconfamily: "Fi",
      iconstyle: { value: "" }
    }
  },
  {
    slug: "github",
    title: "Github",
    metadata: {
      url: "https://github.com/sankalp-mishra2005",
      iconfamily: "Fi",
      iconstyle: { value: "" }
    }
  },
  {
    slug: "linkedin",
    title: "Linkedin",
    metadata: {
      url: "https://www.linkedin.com/in/sankalp-mishra-b09328216/",
      iconfamily: "Fi",
      iconstyle: { value: "" }
    }
  },
  {
    slug: "leetcode",
    title: "Leetcode",
    metadata: {
      url: "https://leetcode.com/u/Sankalp_mishra2005/",
      iconfamily: "Si",
      iconstyle: { value: "" }
    }
  }
]

export const skillsData = [
  { slug: "cpp", title: "C++", metadata: { logo: { url: "/skills/cpp.svg" } } },
  { slug: "python", title: "Python", metadata: { logo: { url: "/skills/python.svg" } } },
  { slug: "javascript", title: "JavaScript", metadata: { logo: { url: "/skills/javascript.svg" } } },
  { slug: "java", title: "Java", metadata: { logo: { url: "/skills/java.svg" } } },
  { slug: "react", title: "React.js", metadata: { logo: { url: "/skills/react.svg" } } },
  { slug: "nodejs", title: "Node.js", metadata: { logo: { url: "/skills/nodejs.svg" } } },
  { slug: "springboot", title: "Spring Boot", metadata: { logo: { url: "/skills/springboot.svg" } } },
  { slug: "mongodb", title: "MongoDB", metadata: { logo: { url: "/skills/mongodb.svg" } } },
  { slug: "sql", title: "SQL", metadata: { logo: { url: "/skills/sql.svg" } } },
  { slug: "git", title: "Git", metadata: { logo: { url: "/skills/git.svg" } } },
  { slug: "aws", title: "AWS", metadata: { logo: { url: "/skills/aws.svg" } } },
  { slug: "nextjs", title: "Next.js", metadata: { logo: { url: "/skills/nextjs.svg" } } },
  { slug: "typescript", title: "TypeScript", metadata: { logo: { url: "/skills/typescript.svg" } } },
  { slug: "tailwind", title: "Tailwind", metadata: { logo: { url: "/skills/tailwind.svg" } } },
  { slug: "supabase", title: "Supabase", metadata: { logo: { url: "/skills/supabase.svg" } } },
  { slug: "postgresql", title: "PostgreSQL", metadata: { logo: { url: "/skills/postgresql.svg" } } },
  { slug: "docker", title: "Docker", metadata: { logo: { url: "/skills/docker.svg" } } }
]

export const projectsData = [
  {
    title: "AI Interviewer",
    slug: "ai-interviewer",
    metadata: {
      type: "Personal",
      overview: "An intelligent, AI-driven mock interview platform featuring real-time conversational evaluation, dynamic question generation, and detailed performance analytics.",
      description: "Engineered an end-to-end AI Mock Interviewer platform leveraging Next.js, OpenAI GPT-4, and speech recognition to conduct interactive technical and behavioral interviews. Built dynamic audio-to-text response synthesis, automated scoring, and comprehensive feedback reports to help candidates practice and improve their interviewing skills.",
      thumbnail: { url: "/projects/ai-interviewer.svg" },
      primary_color: "#10b981",
      tech_stack: [
        { title: "Next.js", metadata: { logo: { url: "/skills/nextjs.svg" } } },
        { title: "TypeScript", metadata: { logo: { url: "/skills/typescript.svg" } } },
        { title: "Tailwind", metadata: { logo: { url: "/skills/tailwind.svg" } } },
        { title: "PostgreSQL", metadata: { logo: { url: "/skills/postgresql.svg" } } }
      ],
      live_link: "https://github.com/sankalp-mishra2005",
      github_repo: "https://github.com/sankalp-mishra2005",
      features_new: `* **Real-Time Voice AI**: Interactive speech recognition and dynamic audio response synthesis.
* **Adaptive Questioning**: LLM-driven context evaluation generating follow-up questions tailored to candidate answers.
* **Automated Scoring**: Detailed feedback metrics analyzing technical depth, response clarity, and confidence.
* **Performance Dashboard**: Visual progress tracking and historical performance analytics.`,
      challenges_new: `* **Speech Latency Optimization**: Minimized real-time voice response latency by streaming audio chunks directly to client audio context.
* **Structured Assessment Schema**: Enforced strict evaluation JSON response schemas using OpenAI function calling for consistent score formatting.`,
      started_on: "2026-04-01",
      ended_on: "2026-06-20",
      highlights: [
        { url: "/projects/ai-interviewer.svg", metadata: { data: "AI Interview Workspace" }, type: "image/svg+xml" }
      ],
      next_project: {
        slug: "devdeploy",
        title: "DevDeploy",
        metadata: {
          overview: "An automated cloud deployment and container orchestration platform for streamlined CI/CD workflows and instant app previews.",
          thumbnail: { url: "/projects/devdeploy.svg" },
          primary_color: "#6366f1"
        }
      }
    }
  },
  {
    title: "DevDeploy",
    slug: "devdeploy",
    metadata: {
      type: "Personal",
      overview: "An automated cloud deployment and container orchestration platform for streamlined CI/CD workflows and instant app previews.",
      description: "Architected DevDeploy, a simplified deployment platform designed to automate containerization, build pipelines, and cloud hosting for web applications. Integrated Docker containers, AWS infrastructure, and webhook triggers to provide zero-downtime rolling updates and custom domain routing.",
      thumbnail: { url: "/projects/devdeploy.svg" },
      primary_color: "#6366f1",
      tech_stack: [
        { title: "Node.js", metadata: { logo: { url: "/skills/nodejs.svg" } } },
        { title: "Docker", metadata: { logo: { url: "/skills/docker.svg" } } },
        { title: "AWS", metadata: { logo: { url: "/skills/aws.svg" } } },
        { title: "React.js", metadata: { logo: { url: "/skills/react.svg" } } }
      ],
      live_link: "https://github.com/sankalp-mishra2005",
      github_repo: "https://github.com/sankalp-mishra2005",
      features_new: `* **One-Click Deployments**: Automated Git repository connection, Docker build trigger, and cloud container hosting.
* **Live Build Streaming**: Real-time console logs streamed over WebSockets and Redis pub/sub channels.
* **Custom Domain Routing**: Automatic SSL certificate provisioning and reverse proxy routing.
* **Environment Management**: Secure secret injection and multi-environment configuration (Staging/Production).`,
      challenges_new: `* **Multi-Tenant Container Security**: Implemented isolated Docker networks and strict memory/CPU resource caps per deployment sandbox.
* **High-Concurrency Logging**: Handled fast-flowing build output stdout streams using Redis pub/sub to decouple builder nodes from websocket subscribers.`,
      started_on: "2026-05-01",
      ended_on: "2026-07-15",
      highlights: [
        { url: "/projects/devdeploy.svg", metadata: { data: "Deployment Dashboard" }, type: "image/svg+xml" }
      ],
      next_project: {
        slug: "virtual-canvas",
        title: "Virtual Canvas",
        metadata: {
          overview: "A touchless virtual drawing platform utilizing advanced hand gesture recognition and computer vision to interact with canvas in real-time.",
          thumbnail: { url: "/projects/virtual-canvas.svg" },
          primary_color: "#1d4ed8"
        }
      }
    }
  },
  {
    title: "Virtual Canvas",
    slug: "virtual-canvas",
    metadata: {
      type: "Personal",
      overview: "A touchless virtual drawing platform utilizing advanced hand gesture recognition and computer vision to interact with canvas in real-time.",
      description: "Engineered a touchless virtual drawing platform utilizing advanced hand gesture recognition and computer vision. Deployed real-time tracking algorithms to enable color selection and canvas interaction without physical peripherals. Optimized gesture detection latency by integrating OpenCV and MediaPipe for high-performance frame processing. Enhanced interactive capabilities through the implementation of dynamic brush controls and diverse drawing modes.",
      thumbnail: { url: "/projects/virtual-canvas.svg" },
      primary_color: "#1d4ed8",
      tech_stack: [
        { title: "Python", metadata: { logo: { url: "/skills/python.svg" } } },
        { title: "OpenCV", metadata: { logo: { url: "/skills/python.svg" } } },
        { title: "NumPy", metadata: { logo: { url: "/skills/python.svg" } } },
        { title: "MediaPipe", metadata: { logo: { url: "/skills/python.svg" } } }
      ],
      live_link: "https://github.com/sankalp-mishra2005",
      github_repo: "https://github.com/sankalp-mishra2005",
      features_new: `* **Touchless Gestures**: Leverage MediaPipe for high-accuracy hand landmark estimation.
* **Dynamic Palette**: Real-time color selection and canvas tools controlled by gestures.
* **Optimized Latency**: Render canvas elements smoothly utilizing NumPy arrays and OpenCV pipeline.
* **Custom Brush Controls**: Dynamic adjustment of drawing parameters and brush size.`,
      challenges_new: `* **Latency & Performance**: Real-time frame processing was optimized by parallelizing OpenCV frame reads and processing matrices with NumPy vectorization.
* **Noisy Detection**: Hand landmark vibrations were smoothed out using a moving average window filter.`,
      started_on: "2026-01-01",
      ended_on: "2026-03-15",
      highlights: [
        { url: "/projects/virtual-canvas.svg", metadata: { data: "Virtual Drawing Demo" }, type: "image/svg+xml" }
      ],
      next_project: {
        slug: "skillconnect",
        title: "SkillConnect",
        metadata: {
          overview: "A full-stack MERN platform designed for professional profile creation, real-time freelance collaboration, and secure authentication.",
          thumbnail: { url: "/projects/skillconnect.svg" },
          primary_color: "#6d28d9"
        }
      }
    }
  },
  {
    title: "SkillConnect",
    slug: "skillconnect",
    metadata: {
      type: "Personal",
      overview: "A full-stack MERN platform designed for professional profile creation, real-time freelance collaboration, and secure authentication.",
      description: "Architected a full-stack MERN platform for professional profile creation and freelance collaboration. Implemented secure authentication protocols using JSON Web Tokens (JWT) for robust user data protection. Designed responsive UI components and integrated RESTful APIs to ensure fluid data synchronization and user engagement. Managed complex datasets and collaboration requests by leveraging MongoDB for scalable data storage.",
      thumbnail: { url: "/projects/skillconnect.svg" },
      primary_color: "#6d28d9",
      tech_stack: [
        { title: "MongoDB", metadata: { logo: { url: "/skills/mongodb.svg" } } },
        { title: "Express.js", metadata: { logo: { url: "/skills/nodejs.svg" } } },
        { title: "React.js", metadata: { logo: { url: "/skills/react.svg" } } },
        { title: "Node.js", metadata: { logo: { url: "/skills/nodejs.svg" } } }
      ],
      live_link: "https://github.com/sankalp-mishra2005",
      github_repo: "https://github.com/sankalp-mishra2005",
      features_new: `* **Freelancer Profiles**: Professional portfolios with rich text editing and showcases.
* **JWT Authentication**: High-security, encrypted cookies and token rotations.
* **Collaboration Workspace**: Easy client-freelancer connections and proposal workflows.
* **REST APIs**: Fast endpoints built on Express.js and validated with Zod.`,
      challenges_new: `* **Data Concurrency**: Handled simultaneous collaboration invites by designing atomic database operations in MongoDB.
* **State Management**: React state synchronization between layout sheets, forms, and client dashboard view.`,
      started_on: "2026-03-20",
      ended_on: "2026-05-30",
      highlights: [
        { url: "/projects/skillconnect.svg", metadata: { data: "Collaboration Dashboard" }, type: "image/svg+xml" }
      ],
      next_project: {
        slug: "ai-interviewer",
        title: "AI Interviewer",
        metadata: {
          overview: "An intelligent, AI-driven mock interview platform featuring real-time conversational evaluation, dynamic question generation, and detailed performance analytics.",
          thumbnail: { url: "/projects/ai-interviewer.svg" },
          primary_color: "#10b981"
        }
      }
    }
  }
]
