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
  "name": "a",
  "headline": "a portfolio",
  "subtitle": "a at a",
  "school": "a",
  "degrees": [
    "a"
  ],
  "location": "a",
  "email": "a",
  "bio": "a is studying a at a and is preparing for a opportunities.",
  "shortBio": "I am a a student focused on a. I build practical software and data projects that are clear, useful, and easy to explain.",
  "focusAreas": [
    "a"
  ],
  "hero": {
    "eyebrow": "a at a",
    "headline": [
      "a",
      "a"
    ],
    "highlightedHeadline": "a",
    "body": "I am a a student focused on a. I build practical software and data projects that are clear, useful, and easy to explain.",
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
      "heading": "Hi there, my name is a.",
      "body": [
        "a is studying a at a and is preparing for a opportunities."
      ],
      "infoGroups": [
        {
          "iconKey": "education",
          "label": "Education",
          "lines": [
            "a in a"
          ]
        },
        {
          "iconKey": "code",
          "label": "Technical Focus",
          "lines": [
            "a"
          ]
        },
        {
          "iconKey": "chart",
          "label": "Project Focus",
          "lines": [
            "a"
          ]
        }
      ],
      "enjoyHeading": "What I focus on",
      "enjoyItems": [
        "a"
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
      "body": "Open to a opportunities."
    }
  }
};
