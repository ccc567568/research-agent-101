import { DocsLayout } from "@/components/article/docs-layout";

const CHEATSHEETS = [
  { title: "Terminal 常用命令", status: "Part II" },
  { title: "Git 速查", status: "Part II" },
  { title: "Conda / pip 速查", status: "Part II" },
  { title: "SSH 与服务器", status: "Part I ✓" },
  { title: "nvidia-smi 解读", status: "Part I ✓" },
  { title: "Agent Prompt 模板", status: "Part III" },
];

export default function CheatsheetsPage() {
  return (
    <DocsLayout showToc={false}>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">Cheatsheets</h1>
      <p className="mb-8 text-muted-foreground leading-relaxed">
        一页纸速查表，方便实验时快速查阅。随课程章节逐步发布。
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {CHEATSHEETS.map((sheet) => (
          <div
            key={sheet.title}
            className="rounded-lg border border-border p-4"
          >
            <h2 className="font-medium">{sheet.title}</h2>
            <p className="mt-1 text-xs text-muted-foreground">{sheet.status}</p>
          </div>
        ))}
      </div>
    </DocsLayout>
  );
}
