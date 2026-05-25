export type EducationItem = {
  school: string;
  degree: string;
  timeline?: string;
  details?: string[];
};

export const education: EducationItem[] = [
  {
    "school": "North Valley State University",
    "degree": "B.S. in Computer Science",
    "timeline": "Expected 2027",
    "details": [
      "Bachelor of Science in Computer Science. Relevant coursework includes data structures, databases, software engineering, and human-computer interaction."
    ]
  }
];
