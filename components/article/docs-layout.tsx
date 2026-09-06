import { SiteHeader } from "@/components/article/site-header";
import { Sidebar } from "@/components/article/sidebar";
import {
  LESSON_TOC_ITEMS,
  TableOfContents,
} from "@/components/article/table-of-contents";

interface DocsLayoutProps {
  children: React.ReactNode;
  showToc?: boolean;
}

export function DocsLayout({ children, showToc = true }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-screen-2xl flex-1">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <div className="mx-auto flex max-w-4xl gap-8 px-4 py-8 lg:px-8">
            <article className="min-w-0 flex-1">{children}</article>
            {showToc && (
              <aside className="hidden w-48 shrink-0 xl:block">
                <div className="sticky top-20">
                  <TableOfContents items={LESSON_TOC_ITEMS} />
                </div>
              </aside>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
