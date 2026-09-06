"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px", threshold: 0 },
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="hidden xl:block">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        On this page
      </p>
      <ul className="space-y-2 border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block border-l-2 py-1 pl-3 text-sm transition-colors -ml-px",
                activeId === item.id
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export const LESSON_TOC_ITEMS: TocItem[] = [
  { id: "section-01", title: "为什么需要知道这个？" },
  { id: "section-02", title: "先建立直觉" },
  { id: "section-03", title: "核心概念" },
  { id: "section-04", title: "一个真实例子" },
  { id: "section-05", title: "自己操作" },
  { id: "section-06", title: "Agent 如何使用它？" },
  { id: "section-07", title: "常见错误" },
  { id: "section-08", title: "科研中什么时候遇到？" },
  { id: "section-09", title: "我学会了吗？" },
  { id: "section-10", title: "下一节" },
];
