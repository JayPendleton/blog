export type ContentItem = {
  slug: string;
  title: string;
  year: string;
  section: "blog" | "projects" | "notes";
  description: string;
};

export const content: ContentItem[] = [

  
  {
    slug: "personal-operating-system",
    title: "Personal Operating System",
    year: "2026",
    section: "blog",
    description:
      "Coming soon. Building software that decides, prioritizes, and supports execution instead of only tracking information.",
      },

        {
    slug: "its-the-phones",
    title: "It's the Phones",
    year: "Dec 8th, 2025",
    section: "blog",
    description: "Constant digital overload is distorting our mental health. How can we fix this?",
    
    
  },

  {
    slug: "upload-to-harddrive",
    title: "How to Transfer Files from iCloud to an External Hard Drive",
    year: "Nov 12th, 2025",
    section: "blog",
    description: "How to Transfer Files from iCloud to an External Hard Drive",
    
    
  },

   {
    slug: "making-mondays-mine",
    title: "Making Mondays Mine",
    year: "Oct 27th, 2025",
    section: "blog",
    description: "Turning Mondays from dreadful to intentional. How I use structure, style, and a bit of scrum to start my week on my own terms.",
    
    
  },

   {
    slug: "2-2-5",
    title: "2 + 2 = 5",
    year: "Oct 20th, 2025",
    section: "blog",
    description: "How to use AI tools responsibly and emphasizing user controls around AI.",
    
    
  },

   {
    slug: "our-own-making",
    title: "Our Own Making",
    year: "Oct 13th, 2025",
    section: "blog",
    description: "Conversation around environmental risks of Artificial Intelligence.",
    
    
  },



  // {
  //   slug: "personal-dashboard",
  //   title: "Personal Dashboard",
  //   year: "2026",
  //   section: "projects",
  //   description:
  //     "A personal command center for tasks, routines, finance, proof uploads, AI insight, and daily reflection.",
  // },
  {
    slug: "proof-album",
    title: "Proof Album",
    year: "2026",
    section: "projects",
    description:
      "Coming soon. A memory layer for capturing visible evidence of progress, receipts, work, and personal wins.",
  },
  // {
  //   slug: "soft-software",
  //   title: "Soft Software",
  //   year: "2026",
  //   section: "blog",
  //   description:
  //   "Software",
  //     // "A short note on quiet interfaces, restraint, whitespace, and products that feel calm enough to use every day.",
  // },
  // {
  //   slug: "agentic-life-systems",
  //   title: "Agentic Life Systems",
  //   year: "2026",
  //   section: "notes",
  //   description:
  //     "Notes on software that forecasts, recommends, adapts, and helps run the day instead of only recording it.",
  // }
];

export const sections = [
  {
    id: "blog",
    label: "Blog",
    description: "Longer pieces on software, discipline, design, and systems."
  },
  {
    id: "projects",
    label: "Projects",
    description: "Products, experiments, and tools I am building."
  },
  {
    id: "notes",
    label: "Notes",
    description: "Short observations, drafts, and fragments."
  }
] as const;
