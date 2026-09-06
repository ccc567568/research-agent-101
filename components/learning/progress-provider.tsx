"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  loadProgress,
  saveProgress,
  type ProgressState,
} from "@/lib/progress";

interface ProgressContextValue {
  state: ProgressState;
  toggleCompleted: (slug: string) => void;
  setTheme: (theme: "light" | "dark") => void;
  isCompleted: (slug: string) => boolean;
}

const defaultState: ProgressState = {
  completed: [],
  theme: "light",
};

const defaultContext: ProgressContextValue = {
  state: defaultState,
  toggleCompleted: () => {},
  setTheme: () => {},
  isCompleted: () => false,
};

const ProgressContext = createContext<ProgressContextValue>(defaultContext);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProgressState>(defaultState);

  useEffect(() => {
    const saved = loadProgress();
    setState(saved);
    document.documentElement.classList.toggle("dark", saved.theme === "dark");
  }, []);

  const toggleCompleted = useCallback((slug: string) => {
    setState((prev) => {
      const completed = prev.completed.includes(slug)
        ? prev.completed.filter((s) => s !== slug)
        : [...prev.completed, slug];
      const next = { ...prev, completed };
      saveProgress(next);
      return next;
    });
  }, []);

  const setTheme = useCallback((theme: "light" | "dark") => {
    setState((prev) => {
      const next = { ...prev, theme };
      saveProgress(next);
      document.documentElement.classList.toggle("dark", theme === "dark");
      return next;
    });
  }, []);

  const isCompleted = useCallback(
    (slug: string) => state.completed.includes(slug),
    [state.completed],
  );

  return (
    <ProgressContext.Provider
      value={{ state, toggleCompleted, setTheme, isCompleted }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
