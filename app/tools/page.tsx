import { DocsLayout } from "@/components/article/docs-layout";
import Link from "next/link";

const SECTIONS = [
  {
    title: "开发环境",
    items: ["VS Code", "Terminal", "Remote SSH"],
  },
  {
    title: "语言与运行时",
    items: ["Python / Conda", "Node.js / npm", "CUDA / PyTorch"],
  },
  {
    title: "协作工具",
    items: ["Git / GitHub", "Docker 入门", "Slurm 作业调度"],
  },
];

export default function ToolsPage() {
  return (
    <DocsLayout showToc={false}>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">Tools</h1>
      <p className="mb-8 text-muted-foreground leading-relaxed">
        科研工作中常用的工具速查与配置指南。Part II 将逐一深入讲解。
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
        先从{" "}
        <Link href="/learn/04-network-ssh" className="text-accent hover:underline">
          SSH 与服务器
        </Link>{" "}
        开始。
      </p>
    </DocsLayout>
  );
}
