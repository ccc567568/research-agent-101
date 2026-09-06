import { Lightbulb } from "lucide-react";

interface TipProps {
  title?: string;
  children: React.ReactNode;
}

export function Tip({ title = "提示", children }: TipProps) {
  return (
    <div className="my-6 rounded-md border border-border bg-muted/50 p-4">
      <div className="mb-2 flex items-center gap-2 font-medium text-foreground">
        <Lightbulb className="h-4 w-4 text-accent" />
        {title}
      </div>
      <div className="text-sm text-muted-foreground [&>p]:mb-2 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
