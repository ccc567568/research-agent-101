"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Lock, Menu, X } from "lucide-react";
import { useState } from "react";
import { PARTS } from "@/lib/course";
import { useProgress } from "@/components/learning/progress-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Sidebar() {
  const pathname = usePathname();
  const { isCompleted } = useProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  const content = (
    <ScrollArea className="h-full">
      <nav className="space-y-6 p-4">
        {PARTS.map((part) => (
          <div key={part.id}>
            <h3 className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {part.title}
            </h3>
            <ul className="space-y-0.5">
              {part.lessons.map((lesson) => {
                const href = `/learn/${lesson.slug}`;
                const active = pathname === href;
                const completed = isCompleted(lesson.slug);
                return (
                  <li key={lesson.slug}>
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                        active
                          ? "bg-muted font-medium text-foreground"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                        !lesson.available && "opacity-60",
                      )}
                    >
                      <span className="w-6 shrink-0 font-mono text-xs">
                        {lesson.number > 0
                          ? String(lesson.number).padStart(2, "0")
                          : "→"}
                      </span>
                      <span className="flex-1 truncate">{lesson.title}</span>
                      {completed && (
                        <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
                      )}
                      {!lesson.available && (
                        <Lock className="h-3 w-3 shrink-0 opacity-50" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </ScrollArea>
  );

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-4 left-4 z-40 lg:hidden"
        onClick={() => setMobileOpen(true)}
        aria-label="打开目录"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <aside className="hidden w-64 shrink-0 border-r border-border lg:block">
        {content}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 w-72 bg-background shadow-lg">
            <div className="flex items-center justify-between border-b border-border p-4">
              <span className="font-medium">课程目录</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            {content}
          </aside>
        </div>
      )}
    </>
  );
}
