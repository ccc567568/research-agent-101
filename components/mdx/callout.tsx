import { cn } from "@/lib/utils";

type CalloutVariant = "info" | "note" | "success";

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}

const variants: Record<CalloutVariant, string> = {
  info: "border-border bg-muted/30",
  note: "border-accent/30 bg-accent/5",
  success: "border-emerald-200 bg-emerald-50 dark:border-emerald-900/50 dark:bg-emerald-950/30",
};

export function Callout({ variant = "info", title, children }: CalloutProps) {
  return (
    <div className={cn("my-6 rounded-md border p-4", variants[variant])}>
      {title && <div className="mb-2 font-medium">{title}</div>}
      <div className="text-sm text-muted-foreground [&>p]:mb-2 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
