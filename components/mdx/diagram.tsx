import { cn } from "@/lib/utils";

interface DiagramProps {
  children: React.ReactNode;
  className?: string;
}

export function Diagram({ children, className }: DiagramProps) {
  return (
    <pre
      className={cn(
        "my-6 overflow-x-auto rounded-md border border-border bg-muted/30 p-4 font-mono text-sm leading-relaxed text-foreground",
        className,
      )}
    >
      {children}
    </pre>
  );
}
