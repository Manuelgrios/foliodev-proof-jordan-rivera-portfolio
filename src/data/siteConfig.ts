import { assetPath } from "../lib/assets";
import type { ThemeId } from "./themes";

export const siteConfig = {
  siteTitle: "Jordan Rivera | Software Engineering Portfolio",
  seoDescription:
    "Portfolio for Jordan Rivera, a fictional FolioDev proof student focused on software engineering, automation, debugging, and data visualization.",
  copyrightYear: 2026,
  brand: {
    initials: "JR",
    name: "Jordan Rivera",
    logoText: "JR",
  },
  theme: {
    activeTheme: "midnight-blue" satisfies ThemeId,
    name: "Dark navy / electric blue",
    sectionLabelStyle: "uppercase blue text",
  },
  resume: {
    label: "Resume",
    path: assetPath("assets/resume/Jordan_Rivera_Resume.pdf"),
    download: true,
  },
} as const;
