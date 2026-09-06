import type { ComponentType } from "react";
import StartHere from "@/content/00-start/where-to-begin.mdx";
import ComputerBasics from "@/content/01-computer/computer-basics.mdx";
import FilesAndPaths from "@/content/01-computer/files-and-paths.mdx";
import OsAndPrograms from "@/content/01-computer/os-and-programs.mdx";
import NetworkSsh from "@/content/01-computer/network-ssh.mdx";

export const LESSON_COMPONENTS: Record<string, ComponentType> = {
  "start-here": StartHere,
  "01-computer-basics": ComputerBasics,
  "02-files-and-paths": FilesAndPaths,
  "03-os-and-programs": OsAndPrograms,
  "04-network-ssh": NetworkSsh,
};

export function getLessonComponent(
  slug: string,
): ComponentType | undefined {
  return LESSON_COMPONENTS[slug];
}
