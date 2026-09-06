import type { MDXComponents } from "mdx/types";
import { Warning } from "@/components/mdx/warning";
import { Tip } from "@/components/mdx/tip";
import { Diagram } from "@/components/mdx/diagram";
import { CodeBlock } from "@/components/mdx/code-block";
import { Checklist } from "@/components/mdx/checklist";
import { Callout } from "@/components/mdx/callout";
import { LessonSection } from "@/components/mdx/lesson-section";
import { cn } from "@/lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (
      <h1
        className={cn("mb-4 text-3xl font-semibold tracking-tight", className)}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn("mb-4 mt-8 text-xl font-semibold tracking-tight", className)}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn("mb-3 mt-6 text-lg font-medium", className)}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={cn("mb-4 leading-7 text-muted-foreground", className)}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul
        className={cn("mb-4 ml-6 list-disc space-y-2 text-muted-foreground", className)}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn("mb-4 ml-6 list-decimal space-y-2 text-muted-foreground", className)}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("leading-7", className)} {...props} />
    ),
    strong: ({ className, ...props }) => (
      <strong className={cn("font-medium text-foreground", className)} {...props} />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground",
          className,
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "my-4 overflow-x-auto rounded-md border border-border bg-muted/30 p-4 font-mono text-sm",
          className,
        )}
        {...props}
      />
    ),
    a: ({ className, ...props }) => (
      <a
        className={cn("text-accent underline-offset-4 hover:underline", className)}
        {...props}
      />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "my-4 border-l-2 border-border pl-4 italic text-muted-foreground",
          className,
        )}
        {...props}
      />
    ),
    table: ({ className, ...props }) => (
      <div className="my-6 overflow-x-auto">
        <table
          className={cn("w-full border-collapse text-sm", className)}
          {...props}
        />
      </div>
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "border border-border bg-muted/50 px-4 py-2 text-left font-medium",
          className,
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn("border border-border px-4 py-2 text-muted-foreground", className)}
        {...props}
      />
    ),
    Warning,
    Tip,
    Diagram,
    CodeBlock,
    Checklist,
    Callout,
    LessonSection,
    ...components,
  };
}
