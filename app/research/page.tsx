import { DocsLayout } from "@/components/article/docs-layout";
import Link from "next/link";

const SECTIONS = [
  {
    title: "文献工作流",
    items: ["文献检索与筛选", "阅读笔记模板", "Related Work 写作辅助"],
  },
  {
    title: "实验管理",
    items: ["实验记录规范", "结果对比与可视化", "复现检查清单"],
  },
  {
    title: "论文写作",
    items: ["LaTeX 基础", "图表与表格规范", "投稿前检查"],
  },
];

export default function ResearchPage() {
  return (
    <DocsLayout showToc={false}>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">Research</h1>
      <p className="mb-8 text-muted-foreground leading-relaxed">
        科研方法论与 Agent 辅助科研的工作流。本模块将在 Part IV 课程上线时填充完整内容。
      </p>
      <div className="space-y-8">
        {SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-lg font-medium">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-border" />
                  {item}
                  <span className="text-xs">（即将推出）</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        现在可以先学习{" "}
        <Link href="/learn/start-here" className="text-accent hover:underline">
          Start Here
        </Link>{" "}
        和{" "}
        <Link
          href="/learn/01-computer-basics"
          className="text-accent hover:underline"
        >
          Part I
        </Link>
        。
      </p>
    </DocsLayout>
  );
}
