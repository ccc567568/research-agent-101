import { Check } from "lucide-react";

interface ChecklistProps {
  items: string[];
}

export function Checklist({ items }: ChecklistProps) {
  return (
    <ul className="my-6 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border bg-muted/50">
            <Check className="h-3 w-3 text-muted-foreground" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
