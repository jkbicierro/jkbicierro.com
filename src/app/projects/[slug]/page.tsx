import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import MDXRenderer from "@/components/mdx/mdx-renderer";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import readingTime from "reading-time";
import { format, parseISO } from "date-fns";
import { ChevronLeft, ExternalLink, Github, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShareButton from "@/components/buttons/share-link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/projects", `${slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");
  const { data } = matter(file);

  return {
    title: data.title || "Projects",
    description:
      data.description ||
      "A collection of projects showcasing my work in web development, design, and technology. Explore case studies, insights, and innovative solutions I've crafted to solve real-world problems.",
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/projects", `${slug}.mdx`);

  try {
    const file = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(file);
    const timeRead = readingTime(content);

    return (
      <main className="px-[20px]">
        <section className="py-[20px] lg:py-[50px] flex flex-col items-start lg:items-center">
          <div className="w-full lg:w-[1000px]">
            <div className="flex flex-col items-start gap-3">
              {/* Button */}
              <div className="w-full flex flex-row items-start justify-between">
                <Button variant="link" className="mb-5 flex items-center p-0" asChild>
                  <Link href="/projects">
                    <ChevronLeft size={16} />
                    Back to projects
                  </Link>
                </Button>
                <div>
                  <ShareButton title={data.title} />
                </div>
              </div>

              {/* Header */}
              <div className="hidden lg:block">
                <div className="mb-5 flex gap-3 items-center">
                  <Avatar className="w-[25px] h-[25px]">
                    <AvatarImage
                      src="https://github.com/jkbicierro.png"
                      alt="John Bicierro"
                    />
                    <AvatarFallback>JB</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">John Bicierro</span>
                </div>
              </div>

              {/* Stats */}
              <time
                dateTime={data.date}
                className="text-slate-600 dark:text-slate-400 uppercase text-xs"
              >
                {data.date ? format(parseISO(data.date), "MMMM d, yyyy") : ""}
              </time>
              <h2>{data.title}</h2>
              <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400">
                {data.description}
              </p>
              <small className="text-slate-600 dark:text-slate-400 uppercase text-xs">
                Project · {timeRead.text}
              </small>

              <div className="mt-5 flex gap-5 lg:gap-8">
                {data.source && (
                  <Button variant={"link"} className="p-0" asChild>
                    <Link href={data.source} target="_blank" rel="noopener noreferrer">
                      <Github />
                      <span className="hidden lg:block">View Project Source Code</span>
                      <span className="block lg:hidden">Source Code</span>
                    </Link>
                  </Button>
                )}
                {data.website && (
                  <Button variant={"link"} className="p-0 m-0" asChild>
                    <Link href={data.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink />
                      <span className="hidden lg:block">View Live Project</span>
                      <span className="block lg:hidden">Live Project</span>
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="mt-10">
              <MDXRenderer source={content} />
            </div>
          </div>
        </section>
      </main>
    );
  } catch {
    return notFound();
  }
}
