export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  tags: string[];
  icon: "code" | "box" | "flask" | "terminal" | "apple" | "chart";
  featured: boolean;
  links?: ProjectLink[];
  overview?: string;
  challenge?: string;
  approach?: string;
  features?: string[];
  workflow?: string[];
  results?: string[];
  technologies: string[];
  interviewTalkingPoints?: string[];
};

export const projects: Project[] = [
  {
    "slug": "campus-event-finder",
    "title": "Campus Event Finder",
    "category": "Student builder",
    "summary": "A responsive app that helps students discover club events, workshops, and study sessions.",
    "description": "A responsive app that helps students discover club events, workshops, and study sessions.",
    "tags": [
      "React",
      "TypeScript",
      "CSS",
      "Local Storage"
    ],
    "icon": "code",
    "featured": true,
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/demo-student-portfolio/campus-event-finder"
      },
      {
        "label": "Live Demo",
        "href": "https://campus-event-finder.example.com"
      }
    ],
    "overview": "A responsive app that helps students discover club events, workshops, and study sessions.",
    "challenge": "Students miss useful campus events because details are scattered across club pages and group chats.",
    "approach": "Built filterable event cards, saved-event state, and a simple organizer view for posting event details.",
    "features": [
      "Student builder",
      "Built filterable event cards, saved-event state, and a simple organizer view for posting event details."
    ],
    "workflow": [
      "Built filterable event cards, saved-event state, and a simple organizer view for posting event details."
    ],
    "results": [
      "Created a working class-project prototype and used feedback from classmates to improve search filters."
    ],
    "technologies": [
      "React",
      "TypeScript",
      "CSS",
      "Local Storage"
    ],
    "interviewTalkingPoints": [
      "Students miss useful campus events because details are scattered across club pages and group chats.",
      "Built filterable event cards, saved-event state, and a simple organizer view for posting event details.",
      "Created a working class-project prototype and used feedback from classmates to improve search filters."
    ]
  },
  {
    "slug": "internship-tracker",
    "title": "Internship Tracker",
    "category": "Student builder",
    "summary": "A planning dashboard for tracking applications, deadlines, contacts, and interview prep.",
    "description": "A planning dashboard for tracking applications, deadlines, contacts, and interview prep.",
    "tags": [
      "TypeScript",
      "React",
      "Node.js"
    ],
    "icon": "chart",
    "featured": true,
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/demo-student-portfolio/internship-tracker"
      }
    ],
    "overview": "A planning dashboard for tracking applications, deadlines, contacts, and interview prep.",
    "challenge": "Keeping applications, follow-ups, and technical practice in separate tools makes progress hard to see.",
    "approach": "Designed status columns, deadline reminders, and summary counts for weekly application planning.",
    "features": [
      "Student builder",
      "Designed status columns, deadline reminders, and summary counts for weekly application planning."
    ],
    "workflow": [
      "Designed status columns, deadline reminders, and summary counts for weekly application planning."
    ],
    "results": [
      "Helped a small study group organize internship applications during a pilot testing week."
    ],
    "technologies": [
      "TypeScript",
      "React",
      "Node.js"
    ],
    "interviewTalkingPoints": [
      "Keeping applications, follow-ups, and technical practice in separate tools makes progress hard to see.",
      "Designed status columns, deadline reminders, and summary counts for weekly application planning.",
      "Helped a small study group organize internship applications during a pilot testing week."
    ]
  },
  {
    "slug": "study-metrics-dashboard",
    "title": "Study Metrics Dashboard",
    "category": "Student builder",
    "summary": "A small dashboard that visualizes study time, assignment categories, and weekly goals.",
    "description": "A small dashboard that visualizes study time, assignment categories, and weekly goals.",
    "tags": [
      "Python",
      "Pandas",
      "CSV",
      "Data Visualization"
    ],
    "icon": "chart",
    "featured": true,
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/demo-student-portfolio/study-metrics-dashboard"
      }
    ],
    "overview": "A small dashboard that visualizes study time, assignment categories, and weekly goals.",
    "challenge": "Students often know they are busy but cannot easily see which classes or tasks consume the most time.",
    "approach": "Cleaned sample CSV data and created charts for weekly hours, course breakdowns, and goal completion.",
    "features": [
      "Student builder",
      "Cleaned sample CSV data and created charts for weekly hours, course breakdowns, and goal completion."
    ],
    "workflow": [
      "Cleaned sample CSV data and created charts for weekly hours, course breakdowns, and goal completion."
    ],
    "results": [
      "Presented a short analysis with recommendations for balancing coursework and project time."
    ],
    "technologies": [
      "Python",
      "Pandas",
      "CSV",
      "Data Visualization"
    ],
    "interviewTalkingPoints": [
      "Students often know they are busy but cannot easily see which classes or tasks consume the most time.",
      "Cleaned sample CSV data and created charts for weekly hours, course breakdowns, and goal completion.",
      "Presented a short analysis with recommendations for balancing coursework and project time."
    ]
  }
];
