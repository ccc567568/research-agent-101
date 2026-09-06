import { cn } from "@/lib/utils";

interface LessonSectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
  id?: string;
}

export function LessonSection({
  number,
  title,
  children,
  id,
}: LessonSectionProps) {
  const sectionId = id ?? `section-${number.replace(/\s/g, "-")}`;
  return (
    <section id={sectionId} className="scroll-mt-24 border-t border-border pt-10 first:border-t-0 first:pt-0">
      <h2 className="mb-6 flex items-baseline gap-3 text-xl font-semibold tracking-tight">
        <span className="font-mono text-sm text-muted-foreground">{number}</span>
        <span>{title}</span>
      </h2>
      <div className="prose-lesson">{children}</div>
    </section>
  );
}
