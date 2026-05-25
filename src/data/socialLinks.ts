export type SocialLink = {
  key: "email" | "linkedin" | "github" | "leetcode" | "portfolio";
  label: string;
  value: string;
  href: string;
  iconKey: "mail" | "linkedin" | "github" | "code" | "external";
  external?: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    "key": "email",
    "label": "Email",
    "value": "demo.student@example.com",
    "href": "mailto:demo.student@example.com",
    "iconKey": "mail"
  },
  {
    "key": "linkedin",
    "label": "LinkedIn",
    "value": "www.linkedin.com/in/demo-student-portfolio",
    "href": "https://www.linkedin.com/in/demo-student-portfolio",
    "iconKey": "linkedin",
    "external": true
  },
  {
    "key": "github",
    "label": "GitHub",
    "value": "github.com/demo-student-portfolio",
    "href": "https://github.com/demo-student-portfolio",
    "iconKey": "github",
    "external": true
  }
];
