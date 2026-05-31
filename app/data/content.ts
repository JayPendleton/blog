export type ContentItem = {
  slug: string;
  title: string;
  year: string;
  section: "essays" | "projects" | "notes";
  description: string;
  body: string[];
};

export const content: ContentItem[] = [
  {
    slug: "personal-operating-system",
    title: "Personal Operating System",
    year: "2026",
    section: "essays",
    description:
      "On building software that decides, prioritizes, and supports execution instead of only tracking information.",
    body: [
      "Most productivity tools are passive. They store tasks, routines, and analytics, but they rarely help decide what matters next.",
      "A personal operating system should make the next move obvious. It should protect attention, surface tradeoffs, and reduce the number of choices required to move forward.",
      "The best version of this software feels less like a dashboard and more like a quiet operator."
    ]
  },
  {
    slug: "daily-dashboard",
    title: "Daily Dashboard",
    year: "2026",
    section: "projects",
    description:
      "A personal command center for tasks, routines, finance, proof uploads, AI insight, and daily reflection.",
    body: [
      "Daily Dashboard is a system for turning daily life into visible execution. It brings routines, tasks, finance, and reflection into a single interface.",
      "The project began as a tracker and is evolving toward an agentic assistant: one that rolls tasks forward, creates daily priorities, and recommends what to do next.",
      "The long-term goal is to create software that supports discipline without adding friction."
    ]
  },
  {
    slug: "proof-album",
    title: "Proof Album",
    year: "2026",
    section: "projects",
    description:
      "A memory layer for capturing visible evidence of progress, receipts, work, and personal wins.",
    body: [
      "Proof Album is built around a simple idea: progress becomes more powerful when it is visible.",
      "By attaching proof to tasks, the system creates an archive of effort, not just a list of completed items.",
      "Over time, this becomes a personal evidence base for reflection and self-trust."
    ]
  },
  {
    slug: "soft-software",
    title: "Soft Software",
    year: "2026",
    section: "essays",
    description:
      "A short note on quiet interfaces, restraint, whitespace, and products that feel calm enough to use every day.",
    body: [
      "A calm interface is not an empty interface. It is a system where hierarchy is created through space, proportion, and timing.",
      "Soft software gives the user room. It does not compete with the work. It frames the work.",
      "The most useful software often disappears at the exact moment you begin using it."
    ]
  },
  {
    slug: "agentic-life-systems",
    title: "Agentic Life Systems",
    year: "2026",
    section: "notes",
    description:
      "Notes on software that forecasts, recommends, adapts, and helps run the day instead of only recording it.",
    body: [
      "Agentic software should understand context. It should know when the user is overloaded, when momentum is low, and when a task should be moved.",
      "The interface is only one layer. The real value is judgment.",
      "The future of personal software is not more dashboards. It is better delegation."
    ]
  }
];

export const sections = [
  {
    id: "essays",
    label: "Essays",
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
