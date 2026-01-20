import React from "react";
import { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Discover John Bicierro's diverse projectws, highlighting his skills and creativity in software development.",
};

export default function Page() {
  const projects = getAllProjects();

  return (
    <main className="px-[20px]">
      <section className="py-[100px] flex flex-col items-center">
        <h2 className="text-center">projects i&apos;ve designed and built</h2>

        <div className="mt-20 w-full lg:w-[800px]">
          <div className="flex flex-col">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="mt-5 pb-5 border-b hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-row items-center gap-5 cursor-pointer"
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={600}
                    height={600}
                    className="rounded-full h-[40px] w-[40px] object-contain"
                  />
                ) : (
                  <div className="rounded-full h-[40px] min-w-[40px] bg-zinc-800" />
                )}

                <div className="w-full space-y-2">
                  <span className="text-xs text-slate-600 dark:text-slate-400 uppercase">
                    {project.small}
                  </span>
                  <div className="flex justify-between items-start gap-5">
                    <h5>{project.title}</h5>
                    <time className="text-slate-600 dark:text-slate-400 text-nowrap text-sm">
                      {project.date ? format(parseISO(project.date), "MMMM, yyyy") : ""}
                    </time>
                  </div>

                  <p className="text-base max-w-[700px] text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
