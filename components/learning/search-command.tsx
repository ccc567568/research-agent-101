"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { SEARCH_INDEX } from "@/lib/course";

export const SEARCH_OPEN_EVENT = "ra101-open-search";

export function SearchCommand() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const openSearch = () => setOpen(true);
    document.addEventListener("keydown", down);
    document.addEventListener(SEARCH_OPEN_EVENT, openSearch);
    return () => {
      document.removeEventListener("keydown", down);
      document.removeEventListener(SEARCH_OPEN_EVENT, openSearch);
    };
  }, []);

  const grouped = SEARCH_INDEX.reduce<Record<string, typeof SEARCH_INDEX>>(
    (acc, item) => {
      if (!acc[item.part]) acc[item.part] = [];
      acc[item.part].push(item);
      return acc;
    },
    {},
  );

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="hidden h-8 w-48 justify-start gap-2 text-muted-foreground md:flex"
        onClick={() => setOpen(true)}
      >
        <Search className="h-3.5 w-3.5" />
        <span className="flex-1 text-left text-xs">搜索课程…</span>
        <kbd className="pointer-events-none rounded border border-border bg-muted px-1.5 font-mono text-[10px]">
          ⌘K
        </kbd>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setOpen(true)}
        aria-label="搜索"
      >
        <Search className="h-4 w-4" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="搜索章节…" />
        <CommandList>
          <CommandEmpty>未找到相关章节</CommandEmpty>
          {Object.entries(grouped).map(([part, items]) => (
            <CommandGroup key={part} heading={part}>
              {items.map((item) => (
                <CommandItem
                  key={item.slug}
                  value={`${item.title} ${item.part}`}
                  onSelect={() => {
                    setOpen(false);
                    router.push(item.href);
                  }}
                >
                  <span className="mr-2 font-mono text-xs text-muted-foreground">
                    {item.number > 0
                      ? String(item.number).padStart(2, "0")
                      : "★"}
                  </span>
                  <span>{item.title}</span>
                  {!item.available && (
                    <span className="ml-auto text-xs text-muted-foreground">
                      即将推出
                    </span>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}

export function SearchNavButton() {
  return (
    <button
      type="button"
      onClick={() => document.dispatchEvent(new Event(SEARCH_OPEN_EVENT))}
      className="rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      Search
    </button>
  );
}
