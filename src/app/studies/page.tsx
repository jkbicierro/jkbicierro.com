import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { getAllStudies } from "@/lib/studies";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore John Bicierro's case studies showcasing real-world problem solving and results.",
};

export default function Page() {
  const studies = getAllStudies();
  return (
    <main className="px-[20px]">
      <section className="py-[100px] flex flex-col items-center">
        <h2 className="text-center">see how i solve real problems and deliver results</h2>

        <div className="mt-20 w-full lg:w-[1000px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {studies.map((study) => (
              <Link key={study.slug} href={`/studies/${study.slug}`}>
                <div className="w-full">
                  <Image
                    src={"/assets/liquid/1.png"}
                    height={800}
                    width={800}
                    alt="Liquid project"
                    className="border rounded-xl h-[200px] w-full"
                  />

                  <h6 className="mt-4 truncate">{study.title}</h6>

                  <div className="mt-2 flex items-center gap-2">
                    <small>{study.type}</small>
                    <time className="text-slate-600 dark:text-slate-400">
                      {study.date ? format(parseISO(study.date), "MMMM d, yyyy") : ""}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
