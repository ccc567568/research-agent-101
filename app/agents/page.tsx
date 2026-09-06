import { DocsLayout } from "@/components/article/docs-layout";
import Link from "next/link";

const SECTIONS = [
  {
    title: "Agent 基础",
    items: [
      "从 ChatGPT 到 Agent",
      "Model / Agent / Harness",
      "Context / Tools / MCP / Skills",
    ],
  },
  {
    title: "Coding Agent",
    items: ["Cursor", "Claude Code", "Codex", "Agent 选型指南"],
  },
  {
    title: "科研 Agent",
    items: ["文献 Agent", "实验 Agent", "Multi-Agent 协作"],
  },
];

export default function AgentsPage() {
  return (
    <DocsLayout showToc={false}>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">Agents</h1>
      <p className="mb-8 text-muted-foreground leading-relaxed">
        Agent 概念、主流工具与科研场景应用。请先完成 Part I–II 基础，再进入 Part III。
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
        课程路径：电脑 → 服务器 → 代码 →{" "}
        <Link href="/learn/10-chatgpt-to-agent" className="text-accent hover:underline">
          Agent
        </Link>
      </p>
    </DocsLayout>
  );
}
