import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import MDXRenderer from "@/components/mdx/mdx-renderer";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import readingTime from "reading-time";
import { format, parseISO } from "date-fns";
import { ChevronLeft, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/studies", `${slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");
  const { data } = matter(file);

  return {
    title: data.title || "Case Studies",
    description:
      data.description ||
      "Explore detailed case studies on John Bicierro's portfolio, showcasing project insights and outcomes.",
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/studies", `${slug}.mdx`);

  try {
    const file = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(file);

    const timeRead = readingTime(content);

    return (
      <main className="px-[20px]">
        <section className="py-[20px] lg:py-[50px] flex flex-col items-center">
          <div className="lg:w-[1000px]">
            <div className="flex flex-col items-start gap-3">
              {/* Button */}
              <div className="w-full flex flex-col lg:flex-row items-start justify-between">
                <Button variant="link" className="mb-5 flex items-center p-0" asChild>
                  <Link href="/studies">
                    <ChevronLeft size={16} />
                    Back to case studies
                  </Link>
                </Button>
                <Button variant={"outline"}>
                  <Share size={16} /> Share &quot;{data.title}&quot;
                </Button>
              </div>

              {/* Header */}
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

              {/* Stats */}
              <time
                dateTime={data.date}
                className="text-slate-600 dark:text-slate-400 uppercase text-xs"
              >
                {data.date ? format(parseISO(data.date), "MMMM d, yyyy") : ""}
              </time>
              <h2>{data.title}</h2>
              <p className="text-slate-600 dark:text-slate-400">{data.description}</p>
              <small className="text-slate-600 dark:text-slate-400 uppercase text-xs">
                {data.type} · {timeRead.text}
              </small>
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
