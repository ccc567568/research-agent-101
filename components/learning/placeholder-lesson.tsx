import Link from "next/link";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Lesson } from "@/lib/course";

interface PlaceholderLessonProps {
  lesson: Lesson;
}

export function PlaceholderLesson({ lesson }: PlaceholderLessonProps) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-muted/20 p-8 text-center">
      <Lock className="mx-auto mb-4 h-8 w-8 text-muted-foreground" />
      <h2 className="mb-2 text-lg font-medium">即将推出</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        「{lesson.title}」章节正在编写中。你可以先完成 Part I 的内容，或浏览课程目录了解完整学习路径。
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild variant="outline">
          <Link href="/learn/01-computer-basics">回到 Part I</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/">返回首页</Link>
        </Button>
      </div>
    </div>
  );
}
