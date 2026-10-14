export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  keywords: string[];
  sections: BlogSection[];
};

export const blogs: BlogPost[] = [
  {
    slug: "getting-started-complete-guide",
    title: "Getting Started: A Complete Guide",
    excerpt:
      "Learn the fundamentals, establish a clear plan, and take your first steps toward building something meaningful.",
    category: "Guides",
    publishedAt: "2026-09-10",
    readTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
    keywords: ["getting started", "beginner guide", "planning"],
    sections: [
      {
        heading: "Start with a clear goal",
        paragraphs: [
          "Every successful project begins with a clear understanding of what you want to accomplish. Define the outcome you want and identify the people who will benefit from it.",
          "A specific goal makes it easier to decide which tasks deserve your attention first."
        ]
      },
      {
        heading: "Build a practical plan",
        paragraphs: [
          "Break your main objective into smaller tasks that you can complete and measure. Set realistic deadlines and review your progress regularly."
        ],
        bullets: [
          "Write down your main objective.",
          "Identify the resources you need.",
          "Choose a manageable first task.",
          "Review results and improve your plan."
        ]
      },
      {
        heading: "Learn as you go",
        paragraphs: [
          "You do not need to know everything before you begin. Take action, collect feedback, and use what you learn to make better decisions. Consistency is more valuable than waiting for perfect conditions."
        ]
      }
    ]
  },
  {
    slug: "top-trends-2026",
    title: "Top Trends You Should Know in 2026",
    excerpt:
      "Explore important developments in technology, digital experiences, and the way people work and learn.",
    category: "Trends",
    publishedAt: "2026-09-15",
    readTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    keywords: ["2026 trends", "technology", "digital trends"],
    sections: [
      {
        heading: "AI-assisted workflows",
        paragraphs: [
          "AI tools are increasingly used to support research, drafting, analysis, and repetitive tasks. Their greatest value comes when people review the results and provide context, judgment, and creativity."
        ]
      },
      {
        heading: "More useful digital experiences",
        paragraphs: [
          "People expect websites and apps to be accessible, fast, mobile-friendly, and easy to navigate. Clear design and relevant content help make digital experiences more useful."
        ]
      },
      {
        heading: "Privacy and trust matter",
        paragraphs: [
          "As digital services expand, users increasingly need clear information about how their data is collected, stored, and used. Transparent practices can help organizations build lasting trust."
        ],
        bullets: [
          "Collect only necessary information.",
          "Explain important decisions clearly.",
          "Make privacy controls easy to find."
        ]
      }
    ]
  },
  {
    slug: "improve-your-productivity",
    title: "10 Tips to Improve Your Productivity",
    excerpt:
      "Use practical routines, thoughtful prioritization, and focused work sessions to get more from your day.",
    category: "Productivity",
    publishedAt: "2026-09-20",
    readTime: "7 min read",
    coverImage:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    keywords: ["productivity tips", "time management", "focus"],
    sections: [
      {
        heading: "Prioritize the important work",
        paragraphs: [
          "Start by identifying the few tasks that will make the biggest difference. A long to-do list is less useful than a short list of meaningful priorities."
        ],
        bullets: [
          "Plan your day before opening your inbox.",
          "Break complex work into smaller steps.",
          "Work on one demanding task at a time.",
          "Set clear limits for meetings and notifications.",
          "Use a calendar to protect focus time."
        ]
      },
      {
        heading: "Create a sustainable routine",
        paragraphs: [
          "Productivity is not about being busy every minute. Take regular breaks, keep your workspace organized, and choose a schedule that you can maintain."
        ],
        bullets: [
          "Prepare your workspace in advance.",
          "Batch similar tasks together.",
          "Automate repetitive activities where practical.",
          "Review what worked at the end of the day.",
          "Leave room for unexpected tasks."
        ]
      },
      {
        heading: "Measure progress, not busyness",
        paragraphs: [
          "At the end of each week, review completed outcomes rather than hours spent working. Use that reflection to improve your priorities for the next week."
        ]
      }
    ]
  },
  {
    slug: "common-mistakes-how-to-avoid",
    title: "Common Mistakes and How to Avoid Them",
    excerpt:
      "Recognize common planning and execution mistakes and learn how to build better habits for long-term progress.",
    category: "Advice",
    publishedAt: "2026-09-25",
    readTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    keywords: ["common mistakes", "planning", "problem solving"],
    sections: [
      {
        heading: "Trying to do everything at once",
        paragraphs: [
          "Taking on too many tasks can divide your attention and make progress difficult to measure. Focus on the highest-impact work before adding more commitments."
        ]
      },
      {
        heading: "Ignoring feedback",
        paragraphs: [
          "Feedback helps you discover blind spots and identify opportunities to improve. Ask specific questions, listen carefully, and decide which changes are worth making."
        ]
      },
      {
        heading: "Skipping the review process",
        paragraphs: [
          "Without regular reviews, small problems can become larger ones. Schedule time to examine your results, document lessons, and adjust your approach."
        ],
        bullets: [
          "Define what success looks like.",
          "Track a small number of useful metrics.",
          "Review setbacks without assigning blame.",
          "Turn lessons into concrete next steps."
        ]
      }
    ]
  },
  {
    slug: "ultimate-beginners-guide",
    title: "The Ultimate Beginner's Guide",
    excerpt:
      "A straightforward roadmap for learning a new skill, finding useful resources, and building confidence through practice.",
    category: "Beginners",
    publishedAt: "2026-09-30",
    readTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    keywords: ["beginner guide", "learning", "skill development"],
    sections: [
      {
        heading: "Understand the basics first",
        paragraphs: [
          "Choose a reliable introductory resource and focus on the core concepts before moving to advanced material. A strong foundation makes later learning easier."
        ]
      },
      {
        heading: "Practice with a real project",
        paragraphs: [
          "Practical projects turn abstract ideas into experience. Start with something small enough to finish and gradually increase its complexity."
        ],
        bullets: [
          "Choose one skill to develop.",
          "Follow a structured learning path.",
          "Practice consistently.",
          "Ask for feedback from others.",
          "Record what you learn along the way."
        ]
      },
      {
        heading: "Keep improving",
        paragraphs: [
          "Progress rarely happens in a straight line. Review your work, celebrate small improvements, and revisit difficult concepts when necessary. The goal is steady development, not instant mastery."
        ]
      }
    ]
  }
];

export function getBlogBySlug(
  slug: string
): BlogPost | undefined {
  return blogs.find((blog) => blog.slug === slug);
}