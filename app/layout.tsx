import type { Metadata } from "next";
import { ProgressProvider } from "@/components/learning/progress-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Research Agent 101",
    template: "%s | Research Agent 101",
  },
  description:
    "从认识电脑，到使用 Agent 独立完成科研任务。面向研究生的 AI 时代科研计算入门课程。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
