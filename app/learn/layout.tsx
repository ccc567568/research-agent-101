import { DocsLayout } from "@/components/article/docs-layout";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocsLayout>{children}</DocsLayout>;
}
