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
    "category": "Group 1",
    "items": [
      {
        "name": "a",
        "shortLabel": "A",
        "category": "Group 1"
      }
    ]
  }
];

export const skillItems: SkillItem[] = skillCategories.flatMap((category) => category.items);
