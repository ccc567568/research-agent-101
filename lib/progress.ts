const STORAGE_KEY = "ra101-progress";

export interface ProgressState {
  completed: string[];
  theme: "light" | "dark";
}

const DEFAULT_STATE: ProgressState = {
  completed: [],
  theme: "light",
};

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      theme: parsed.theme === "dark" ? "dark" : "light",
    };
  } catch {
    return DEFAULT_STATE;
  }
}

export function saveProgress(state: ProgressState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function toggleCompleted(slug: string): ProgressState {
  const state = loadProgress();
  const completed = state.completed.includes(slug)
    ? state.completed.filter((s) => s !== slug)
    : [...state.completed, slug];
  const next = { ...state, completed };
  saveProgress(next);
  return next;
}

export function setTheme(theme: "light" | "dark"): ProgressState {
  const state = { ...loadProgress(), theme };
  saveProgress(state);
  return state;
}

export function isCompleted(slug: string): boolean {
  return loadProgress().completed.includes(slug);
}
