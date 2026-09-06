"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/components/learning/progress-provider";
import type { Lesson } from "@/lib/course";
import { getLessonBySlug } from "@/lib/course";
import { cn } from "@/lib/utils";

interface LessonFooterProps {
  slug: string;
  prev: Lesson | null;
  next: Lesson | null;
}

export function LessonFooter({ slug, prev, next }: LessonFooterProps) {
  const { isCompleted, toggleCompleted } = useProgress();
  const completed = isCompleted(slug);

  return (
    <footer className="mt-16 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
      <div className="w-full sm:w-auto">
        {prev ? (
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href={`/learn/${prev.slug}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span className="truncate">{prev.title}</span>
            </Link>
          </Button>
        ) : (
          <div />
        )}
      </div>

      <Button
        variant={completed ? "outline" : "accent"}
        onClick={() => toggleCompleted(slug)}
        className="w-full sm:w-auto"
      >
        {completed ? (
          <>
            <CheckCircle2 className="mr-2 h-4 w-4 text-accent" />
            已完成
          </>
        ) : (
          <>
            <Circle className="mr-2 h-4 w-4" />
            Mark as Completed
          </>
        )}
      </Button>

      <div className="w-full sm:w-auto sm:text-right">
        {next ? (
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href={`/learn/${next.slug}`}>
              <span className="truncate">{next.title}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <div />
        )}
      </div>
    </footer>
  );
}

interface LessonHeaderProps {
  lesson: Lesson;
}

export function LessonHeader({ lesson }: LessonHeaderProps) {
  const displayNumber =
    lesson.number > 0
      ? `${String(lesson.number).padStart(2, "0")} / 34`
      : "Start Here";

  return (
    <header className="mb-10">
      <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <span className="font-medium uppercase tracking-wider">
          {lesson.part}
        </span>
        <span>·</span>
        <span className="font-mono">{displayNumber}</span>
      </div>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
        {lesson.title}
      </h1>
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <span>预计 {lesson.estimatedTime}</span>
        <span>难度：{lesson.difficulty}</span>
        {lesson.prerequisites.length > 0 && (
          <span>
            前置：
            {lesson.prerequisites.map((p, i) => {
              const prereq = getLessonBySlug(p);
              return (
                <span key={p}>
                  {i > 0 && "、"}
                  <Link
                    href={`/learn/${p}`}
                    className={cn("text-accent hover:underline")}
                  >
                    {prereq?.title ?? p}
                  </Link>
                </span>
              );
            })}
          </span>
        )}
      </div>
    </header>
  );
}
