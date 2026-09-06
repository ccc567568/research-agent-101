import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/article/site-header";
import { Button } from "@/components/ui/button";
import {
  HOMEPAGE_CAPABILITIES,
  LEARNING_LEVELS,
  TASK_LINKS,
} from "@/lib/course";

function ResearchDiagram() {
  return (
    <pre className="overflow-x-auto rounded-lg border border-border bg-muted/30 p-6 font-mono text-xs leading-relaxed text-foreground sm:text-sm">
      {`     Idea → Paper → Code → Experiment → Result → Paper
                    Agent
                  ↙   ↓   ↘
              Search Code Terminal`}
    </pre>
  );
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Screen 1: Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-screen-xl gap-12 px-4 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Research Agent 101
            </h1>
            <p className="mb-2 text-lg text-muted-foreground">
              从认识电脑，到使用 Agent 独立完成科研任务
            </p>
            <p className="mb-8 max-w-lg text-muted-foreground leading-relaxed">
              面向研究生的 AI 时代科研计算入门课程。不要求你成为程序员，但希望你能够理解电脑、服务器、代码与
              Agent，并利用它们独立完成科研任务。
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="default" size="lg">
                <Link href="/learn/start-here">从零开始</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/learn/start-here#section-05">我已经会基础操作</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <ResearchDiagram />
          </div>
        </div>
      </section>

      {/* Screen 2: Capabilities */}
      <section className="border-b border-border bg-muted/20">
        <div className="mx-auto max-w-screen-xl px-4 py-20 lg:px-8">
          <h2 className="mb-10 text-2xl font-semibold tracking-tight">
            你最终会学会什么
          </h2>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium">能力</th>
                  <th className="px-4 py-3 text-left font-medium">对应概念</th>
                </tr>
              </thead>
              <tbody>
                {HOMEPAGE_CAPABILITIES.map((row, i) => (
                  <tr
                    key={row.skill}
                    className={i % 2 === 0 ? "bg-background" : "bg-muted/10"}
                  >
                    <td className="px-4 py-3 font-medium">{row.skill}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {row.concept}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Screen 3: Learning Path */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-screen-xl px-4 py-20 lg:px-8">
          <h2 className="mb-10 text-2xl font-semibold tracking-tight">
            学习路径
          </h2>
          <div className="space-y-0">
            {LEARNING_LEVELS.map((level, i) => (
              <div key={level.level} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-xs font-mono font-medium">
                    {level.level}
                  </div>
                  {i < LEARNING_LEVELS.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-8">
                  <Link
                    href={`/learn/${level.chapter}`}
                    className="group flex items-center gap-2 text-base font-medium hover:text-accent"
                  >
                    LEVEL {level.level} {level.title}
                    <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* I want to... */}
      <section className="bg-muted/20">
        <div className="mx-auto max-w-screen-xl px-4 py-20 lg:px-8">
          <h2 className="mb-10 text-2xl font-semibold tracking-tight">
            I want to…
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TASK_LINKS.map((item) => (
              <Link
                key={item.task}
                href={item.href}
                className="group rounded-lg border border-border bg-background p-4 transition-colors hover:border-accent/50 hover:bg-muted/30"
              >
                <span className="text-sm font-medium">{item.task}</span>
                {!item.available && (
                  <span className="mt-1 block text-xs text-muted-foreground">
                    部分章节即将推出
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
