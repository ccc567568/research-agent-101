import { DocsLayout } from "@/components/article/docs-layout";

const TERMS = [
  { term: "CPU", definition: "中央处理器，负责通用计算和系统协调" },
  { term: "GPU", definition: "图形处理器，擅长并行矩阵运算，深度学习核心硬件" },
  { term: "RAM", definition: "内存，程序运行时的临时存储空间" },
  { term: "VRAM", definition: "显存，GPU 专用内存，模型训练的关键瓶颈" },
  { term: "SSH", definition: "Secure Shell，加密的远程登录协议" },
  { term: "Agent", definition: "能自主使用工具完成任务的 AI 系统" },
  { term: "Terminal", definition: "命令行界面，通过文字命令操作电脑" },
  { term: "Process", definition: "正在运行的程序实例" },
];

export default function GlossaryPage() {
  return (
    <DocsLayout showToc={false}>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">Glossary</h1>
      <p className="mb-8 text-muted-foreground leading-relaxed">
        课程中出现的术语中英文对照与简要解释。随章节更新持续扩充。
      </p>
      <dl className="space-y-4">
        {TERMS.map((item) => (
          <div
            key={item.term}
            className="rounded-lg border border-border p-4"
          >
            <dt className="font-mono font-medium text-accent">{item.term}</dt>
            <dd className="mt-1 text-sm text-muted-foreground">
              {item.definition}
            </dd>
          </div>
        ))}
      </dl>
    </DocsLayout>
  );
}
