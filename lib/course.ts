export type Difficulty = "入门" | "基础" | "进阶" | "高阶";

export interface Lesson {
  slug: string;
  number: number;
  title: string;
  part: string;
  partId: string;
  estimatedTime: string;
  difficulty: Difficulty;
  prerequisites: string[];
  available: boolean;
  description?: string;
}

export interface Part {
  id: string;
  title: string;
  lessons: Lesson[];
}

function lesson(
  number: number,
  slug: string,
  title: string,
  partId: string,
  part: string,
  opts: Partial<Lesson> = {},
): Lesson {
  return {
    slug,
    number,
    title,
    part,
    partId,
    estimatedTime: opts.estimatedTime ?? "15 分钟",
    difficulty: opts.difficulty ?? "入门",
    prerequisites: opts.prerequisites ?? [],
    available: opts.available ?? false,
    description: opts.description,
  };
}

export const PARTS: Part[] = [
  {
    id: "start",
    title: "Start Here",
    lessons: [
      lesson(0, "start-here", "我应该从哪里开始？", "start", "Start Here", {
        available: true,
        estimatedTime: "10 分钟",
        difficulty: "入门",
        prerequisites: [],
        description: "判断你的起点，选择合适的学习路径",
      }),
    ],
  },
  {
    id: "part-1",
    title: "Part I 重新认识电脑",
    lessons: [
      lesson(1, "01-computer-basics", "电脑到底是什么", "part-1", "Part I 重新认识电脑", {
        available: true,
        estimatedTime: "20 分钟",
        difficulty: "入门",
        prerequisites: [],
      }),
      lesson(2, "02-files-and-paths", "文件、目录与路径", "part-1", "Part I 重新认识电脑", {
        available: true,
        estimatedTime: "25 分钟",
        difficulty: "入门",
        prerequisites: ["01-computer-basics"],
      }),
      lesson(3, "03-os-and-programs", "操作系统与程序", "part-1", "Part I 重新认识电脑", {
        available: true,
        estimatedTime: "20 分钟",
        difficulty: "基础",
        prerequisites: ["02-files-and-paths"],
      }),
      lesson(4, "04-network-ssh", "网络、服务器与 SSH", "part-1", "Part I 重新认识电脑", {
        available: true,
        estimatedTime: "25 分钟",
        difficulty: "基础",
        prerequisites: ["03-os-and-programs"],
      }),
    ],
  },
  {
    id: "part-2",
    title: "Part II 建立科研工作环境",
    lessons: [
      lesson(5, "05-terminal-cli", "Terminal 与 CLI", "part-2", "Part II 建立科研工作环境", {
        estimatedTime: "30 分钟",
        difficulty: "基础",
        prerequisites: ["04-network-ssh"],
      }),
      lesson(6, "06-vscode", "VS Code", "part-2", "Part II 建立科研工作环境", {
        estimatedTime: "20 分钟",
        difficulty: "基础",
      }),
      lesson(7, "07-git-github", "Git 与 GitHub", "part-2", "Part II 建立科研工作环境", {
        estimatedTime: "35 分钟",
        difficulty: "基础",
      }),
      lesson(8, "08-python-conda", "Python / Conda / pip", "part-2", "Part II 建立科研工作环境", {
        estimatedTime: "30 分钟",
        difficulty: "基础",
      }),
      lesson(9, "09-nodejs-npm", "Node.js / npm / React / Next.js", "part-2", "Part II 建立科研工作环境", {
        estimatedTime: "25 分钟",
        difficulty: "基础",
      }),
    ],
  },
  {
    id: "part-3",
    title: "Part III 进入 Agent 时代",
    lessons: [
      lesson(10, "10-chatgpt-to-agent", "从 ChatGPT 到 Agent", "part-3", "Part III 进入 Agent 时代", {
        estimatedTime: "20 分钟",
        difficulty: "基础",
      }),
      lesson(11, "11-how-agents-work", "Agent 是怎么工作的", "part-3", "Part III 进入 Agent 时代", {
        estimatedTime: "25 分钟",
        difficulty: "基础",
      }),
      lesson(12, "12-model-agent-harness", "Model / Agent / Harness / Claw", "part-3", "Part III 进入 Agent 时代", {
        estimatedTime: "25 分钟",
        difficulty: "进阶",
      }),
      lesson(13, "13-context-tools-mcp", "Context / Tools / MCP / Skills", "part-3", "Part III 进入 Agent 时代", {
        estimatedTime: "30 分钟",
        difficulty: "进阶",
      }),
      lesson(14, "14-coding-agents", "主流 Coding Agent", "part-3", "Part III 进入 Agent 时代", {
        estimatedTime: "30 分钟",
        difficulty: "进阶",
      }),
    ],
  },
  {
    id: "part-4",
    title: "Part IV 用 Agent 做科研",
    lessons: Array.from({ length: 8 }, (_, i) => {
      const n = 15 + i;
      return lesson(n, `${n}-part4-chapter`, `第 ${n} 章（即将推出）`, "part-4", "Part IV 用 Agent 做科研", {
        estimatedTime: "待定",
        difficulty: "进阶",
      });
    }),
  },
  {
    id: "part-5",
    title: "Part V 高阶科研 Agent",
    lessons: Array.from({ length: 6 }, (_, i) => {
      const n = 23 + i;
      return lesson(n, `${n}-part5-chapter`, `第 ${n} 章（即将推出）`, "part-5", "Part V 高阶科研 Agent", {
        estimatedTime: "待定",
        difficulty: "高阶",
      });
    }),
  },
  {
    id: "part-6",
    title: "Part VI 边界与规范",
    lessons: Array.from({ length: 6 }, (_, i) => {
      const n = 29 + i;
      return lesson(n, `${n}-part6-chapter`, `第 ${n} 章（即将推出）`, "part-6", "Part VI 边界与规范", {
        estimatedTime: "待定",
        difficulty: "高阶",
      });
    }),
  },
];

export const ALL_LESSONS: Lesson[] = PARTS.flatMap((p) => p.lessons);

export const TOTAL_LESSONS = ALL_LESSONS.filter((l) => l.number > 0).length;

export function getLessonBySlug(slug: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.slug === slug);
}

export function getAdjacentLessons(slug: string): {
  prev: Lesson | null;
  next: Lesson | null;
} {
  const index = ALL_LESSONS.findIndex((l) => l.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? ALL_LESSONS[index - 1] : null,
    next: index < ALL_LESSONS.length - 1 ? ALL_LESSONS[index + 1] : null,
  };
}

export const SEARCH_INDEX = ALL_LESSONS.map((l) => ({
  slug: l.slug,
  title: l.title,
  part: l.part,
  number: l.number,
  available: l.available,
  href: `/learn/${l.slug}`,
}));

export const HOMEPAGE_CAPABILITIES = [
  { skill: "看懂电脑配置", concept: "CPU / GPU / RAM / VRAM" },
  { skill: "找到文件", concept: "文件系统与路径" },
  { skill: "Terminal", concept: "命令行基础" },
  { skill: "登录 GPU 服务器", concept: "SSH 与远程连接" },
  { skill: "Conda", concept: "Python 环境管理" },
  { skill: "Git", concept: "版本控制与协作" },
  { skill: "AI 改代码", concept: "Coding Agent" },
  { skill: "阅读陌生项目", concept: "代码结构与导航" },
  { skill: "复现论文", concept: "实验复现流程" },
  { skill: "文献调研", concept: "Agent 辅助检索" },
  { skill: "自动跑实验", concept: "脚本与批处理" },
  { skill: "分析结果", concept: "数据处理与可视化" },
  { skill: "Multi-Agent", concept: "多 Agent 协作" },
];

export const LEARNING_LEVELS = [
  { level: 0, title: "我只会用浏览器和微信", chapter: "start-here" },
  { level: 1, title: "我理解自己的电脑", chapter: "01-computer-basics" },
  { level: 2, title: "我会 Terminal / SSH / VS Code", chapter: "05-terminal-cli" },
  { level: 3, title: "我可以运行别人的代码", chapter: "08-python-conda" },
  { level: 4, title: "我会使用 Coding Agent", chapter: "14-coding-agents" },
  { level: 5, title: "我可以让 Agent 辅助科研", chapter: "15-part4-chapter" },
  { level: 6, title: "我可以设计自己的 Agent Workflow", chapter: "23-part5-chapter" },
];

export const TASK_LINKS = [
  { task: "连接实验室服务器", href: "/learn/04-network-ssh", available: true },
  { task: "运行 GitHub 上的项目", href: "/learn/08-python-conda", available: false },
  { task: "修复 Python 报错", href: "/learn/08-python-conda", available: false },
  { task: "使用 AI 修改代码", href: "/learn/14-coding-agents", available: false },
  { task: "让 AI 阅读论文", href: "/learn/15-part4-chapter", available: false },
  { task: "复现一篇论文", href: "/learn/15-part4-chapter", available: false },
  { task: "让 AI 帮我跑实验", href: "/learn/15-part4-chapter", available: false },
  { task: "使用 Coding Agent", href: "/learn/14-coding-agents", available: false },
];
