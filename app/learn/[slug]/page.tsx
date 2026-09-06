import { notFound } from "next/navigation";
import {
  LessonFooter,
  LessonHeader,
} from "@/components/article/lesson-chrome";
import { ALL_LESSONS, getAdjacentLessons, getLessonBySlug } from "@/lib/course";
import { getLessonComponent } from "@/lib/lesson-content";
import { PlaceholderLesson } from "@/components/learning/placeholder-lesson";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_LESSONS.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) return { title: "Not Found" };
  return {
    title: lesson.title,
    description: lesson.description ?? `${lesson.part} - ${lesson.title}`,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) notFound();

  const { prev, next } = getAdjacentLessons(slug);
  const Content = getLessonComponent(slug);

  return (
    <>
      <LessonHeader lesson={lesson} />
      {Content ? <Content /> : <PlaceholderLesson lesson={lesson} />}
      <LessonFooter slug={slug} prev={prev} next={next} />
    </>
  );
}
