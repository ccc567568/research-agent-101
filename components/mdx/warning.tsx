import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";

interface WarningProps {
  title?: string;
  children: React.ReactNode;
}

export function Warning({ title = "注意", children }: WarningProps) {
  return (
    <div className="my-6 rounded-md border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/30">
      <div className="mb-2 flex items-center gap-2 font-medium text-amber-900 dark:text-amber-200">
        <AlertTriangle className="h-4 w-4" />
        {title}
      </div>
      <div className="text-sm text-amber-900/90 dark:text-amber-100/90 [&>p]:mb-2 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
