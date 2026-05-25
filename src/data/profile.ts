export type CtaLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  headline: string;
  subtitle: string;
  school: string;
  degrees: string[];
  location: string;
  email: string;
  bio: string;
  shortBio: string;
  focusAreas: string[];
  hero: {
    eyebrow: string;
    headline: string[];
    highlightedHeadline: string;
    body: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    image: { src: string; alt: string };
  };
  sections: {
    about: { eyebrow: string; heading: string; body: string[]; infoGroups: Array<{ iconKey: "education" | "code" | "chart"; label: string; lines: string[] }>; enjoyHeading: string; enjoyItems: string[] };
    projects: { eyebrow: string; heading: string; indexHeading: string; description: string; viewAllLabel: string };
    skills: { eyebrow: string; heading: string; description?: string };
    contact: { eyebrow: string; heading: string; pageHeading: string; body: string };
  };
};

export const profile: Profile = {
  "name": "Alex Morgan",
  "headline": "Software Engineer Intern portfolio",
  "subtitle": "Computer Science at North Valley State University",
  "school": "North Valley State University",
  "degrees": [
    "B.S."
  ],
  "location": "San Diego, CA",
  "email": "demo.student@example.com",
  "bio": "Alex Morgan is studying Computer Science at North Valley State University and is preparing for Software Engineer Intern, Frontend Developer Intern, Data Tools Intern opportunities.",
  "shortBio": "I am a B.S. student focused on software engineer intern and frontend developer intern. I build practical software and data projects that are clear, useful, and easy to explain.",
  "focusAreas": [
    "TypeScript",
    "JavaScript",
    "Python",
    "SQL",
    "React",
    "HTML"
  ],
  "hero": {
    "eyebrow": "Computer Science at North Valley State University",
    "headline": [
      "Software Engineer Intern",
      "Computer Science"
    ],
    "highlightedHeadline": "Computer Science",
    "body": "I am a B.S. student focused on software engineer intern and frontend developer intern. I build practical software and data projects that are clear, useful, and easy to explain.",
    "primaryCta": {
      "label": "View Projects",
      "href": "/#projects"
    },
    "secondaryCta": {
      "label": "Contact Me",
      "href": "/#contact"
    },
    "image": {
      "src": "",
      "alt": ""
    }
  },
  "sections": {
    "about": {
      "eyebrow": "About Me",
      "heading": "Hi there, my name is Alex.",
      "body": [
        "Alex Morgan is studying Computer Science at North Valley State University and is preparing for Software Engineer Intern, Frontend Developer Intern, Data Tools Intern opportunities."
      ],
      "infoGroups": [
        {
          "iconKey": "education",
          "label": "Education",
          "lines": [
            "B.S. in Computer Science"
          ]
        },
        {
          "iconKey": "code",
          "label": "Technical Focus",
          "lines": [
            "Software Engineer Intern",
            "Frontend Developer Intern"
          ]
        },
        {
          "iconKey": "chart",
          "label": "Project Focus",
          "lines": [
            "TypeScript",
            "JavaScript",
            "Python"
          ]
        }
      ],
      "enjoyHeading": "What I focus on",
      "enjoyItems": [
        "TypeScript",
        "JavaScript",
        "Python",
        "SQL"
      ]
    },
    "projects": {
      "eyebrow": "Projects",
      "heading": "Things I've Built",
      "indexHeading": "Project index",
      "description": "Selected projects focused on technical decisions, outcomes, and practical student experience.",
      "viewAllLabel": "View All Projects"
    },
    "skills": {
      "eyebrow": "Skills",
      "heading": "Technologies I Work With",
      "description": "Grouped technical skills generated from the FolioDev workspace draft."
    },
    "contact": {
      "eyebrow": "Contact",
      "heading": "Let's Connect",
      "pageHeading": "Get in touch",
      "body": "Open to Software Engineer Intern, Frontend Developer Intern, Data Tools Intern opportunities."
    }
  }
};
