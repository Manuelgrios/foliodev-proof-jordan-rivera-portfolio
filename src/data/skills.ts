export type SkillCategory = {
  category: string;
  items: SkillItem[];
};

export type SkillItem = {
  name: string;
  shortLabel: string;
  category: string;
  iconKey?: string;
};

export const skillCategories: SkillCategory[] = [
  {
    "category": "Languages",
    "items": [
      {
        "name": "TypeScript",
        "shortLabel": "TS",
        "category": "Languages"
      },
      {
        "name": "JavaScript",
        "shortLabel": "JS",
        "category": "Languages"
      },
      {
        "name": "Python",
        "shortLabel": "P",
        "category": "Languages"
      },
      {
        "name": "SQL",
        "shortLabel": "SQL",
        "category": "Languages"
      }
    ]
  },
  {
    "category": "Web",
    "items": [
      {
        "name": "React",
        "shortLabel": "R",
        "category": "Web"
      },
      {
        "name": "HTML",
        "shortLabel": "HTML",
        "category": "Web"
      },
      {
        "name": "CSS",
        "shortLabel": "CSS",
        "category": "Web"
      },
      {
        "name": "Node.js",
        "shortLabel": "N",
        "category": "Web"
      }
    ]
  },
  {
    "category": "Tools",
    "items": [
      {
        "name": "Git",
        "shortLabel": "G",
        "category": "Tools"
      },
      {
        "name": "GitHub",
        "shortLabel": "GH",
        "category": "Tools"
      },
      {
        "name": "VS Code",
        "shortLabel": "VSC",
        "category": "Tools"
      },
      {
        "name": "Figma",
        "shortLabel": "F",
        "category": "Tools"
      }
    ]
  },
  {
    "category": "Data",
    "items": [
      {
        "name": "Pandas",
        "shortLabel": "P",
        "category": "Data"
      },
      {
        "name": "CSV analysis",
        "shortLabel": "CSV",
        "category": "Data"
      },
      {
        "name": "dashboards",
        "shortLabel": "D",
        "category": "Data"
      }
    ]
  }
];

export const skillItems: SkillItem[] = skillCategories.flatMap((category) => category.items);
