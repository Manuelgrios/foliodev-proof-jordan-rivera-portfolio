import { education } from "./education";
import { siteConfig } from "./siteConfig";

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
    image: {
      src: string;
      alt: string;
    };
  };
  sections: {
    about: {
      eyebrow: string;
      heading: string;
      body: string[];
      infoGroups: Array<{
        iconKey: "education" | "code" | "chart";
        label: string;
        lines: string[];
      }>;
      enjoyHeading: string;
      enjoyItems: string[];
    };
    projects: {
      eyebrow: string;
      heading: string;
      indexHeading: string;
      description: string;
      viewAllLabel: string;
    };
    skills: {
      eyebrow: string;
      heading: string;
      description?: string;
    };
    contact: {
      eyebrow: string;
      heading: string;
      pageHeading: string;
      body: string;
    };
  };
};

const school = "University of Washington Bothell";
const degrees = education.map((item) => item.degree);

export const profile: Profile = {
  name: siteConfig.brand.name,
  headline: "Aspiring Software Engineer.",
  subtitle: "Applied Computing and Data Visualization Student",
  school,
  degrees,
  location: "Seattle, Washington",
  email: "jordan.rivera@example.com",
  bio:
    "Jordan Rivera is a fictional FolioDev proof student whose portfolio data is generated from the FolioDev publish pipeline. The profile highlights software engineering, automation, debugging, and data visualization work.",
  shortBio:
    "Jordan is a fictional proof student focused on software engineering, automation, debugging, and data visualization.",
  focusAreas: [
    "Software engineering",
    "Automation",
    "Debugging",
    "Data visualization",
  ],
  hero: {
    eyebrow: "Software Engineering Portfolio",
    headline: ["Building reliable tools.", "Explaining technical work."],
    highlightedHeadline: "Jordan Rivera",
    body:
      "I'm a fictional FolioDev proof student focused on practical software projects, repeatable workflows, and clear technical communication.",
    primaryCta: { label: "View Projects", href: "/#projects" },
    secondaryCta: { label: "Contact Me", href: "/#contact" },
    image: {
      src: "assets/headshot.png",
      alt: "Abstract profile image for Jordan Rivera",
    },
  },
  sections: {
    about: {
      eyebrow: "About Me",
      heading: "Practical. Curious. Clear.",
      body: [
        "This proof portfolio uses generated FolioDev data to populate an existing portfolio template. Jordan's fictional profile is designed to validate the publishing path without using a real customer's identity.",
      ],
      infoGroups: [
        {
          iconKey: "education",
          label: "Education",
          lines: degrees,
        },
        {
          iconKey: "code",
          label: "Technical Focus",
          lines: ["Software Engineering", "Automation", "Debugging"],
        },
        {
          iconKey: "chart",
          label: "Data Focus",
          lines: ["Data Visualization", "Clear Technical Communication"],
        },
      ],
      enjoyHeading: "What I focus on",
      enjoyItems: [
        "Building repeatable deployment workflows",
        "Debugging backend and tooling issues",
        "Structuring technical projects for review",
        "Explaining implementation decisions clearly",
      ],
    },
    projects: {
      eyebrow: "Projects",
      heading: "Selected Work",
      indexHeading: "Project index",
      description:
        "Generated proof projects focused on automation, Unity tooling, backend debugging, data structures, research, and data visualization.",
      viewAllLabel: "View All Projects",
    },
    skills: {
      eyebrow: "Skills",
      heading: "Technologies I Work With",
      description:
        "Languages, tools, frameworks, and analysis skills represented in the generated FolioDev proof data.",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's Connect",
      pageHeading: "Get in touch",
      body:
        "This is a controlled FolioDev proof portfolio using fictional demo data. It validates the publish path without launching a customer site.",
    },
  },
};
