import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: React.ReactNode;
  title?: string;
  language?: string;
}

export function CodeBlock({ children, title, language }: CodeBlockProps) {
  return (
    <div className="my-6 overflow-hidden rounded-md border border-border">
      {(title || language) && (
        <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2 text-xs text-muted-foreground">
          <span>{title}</span>
          {language && <span className="font-mono uppercase">{language}</span>}
        </div>
      )}
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}
