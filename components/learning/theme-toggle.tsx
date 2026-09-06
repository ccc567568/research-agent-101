"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/components/learning/progress-provider";

export function ThemeToggle() {
  const { state, setTheme } = useProgress();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(state.theme === "light" ? "dark" : "light")}
      aria-label="切换主题"
    >
      {state.theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  );
}
