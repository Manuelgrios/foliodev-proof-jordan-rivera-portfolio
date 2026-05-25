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
    "value": "a",
    "href": "mailto:a",
    "iconKey": "mail"
  },
  {
    "key": "linkedin",
    "label": "LinkedIn",
    "value": "a",
    "href": "https://a",
    "iconKey": "linkedin",
    "external": true
  },
  {
    "key": "github",
    "label": "GitHub",
    "value": "a",
    "href": "https://a",
    "iconKey": "github",
    "external": true
  },
  {
    "key": "portfolio",
    "label": "Website",
    "value": "a",
    "href": "https://a",
    "iconKey": "external",
    "external": true
  }
];
