import React from "react";
import { Metadata } from "next";
import { getAllInsights } from "@/lib/insights";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Delve into John Bicierro's insights, featuring articles on software development, design, and industry trends.",
};

export default function Page() {
  const insights = getAllInsights();
  return (
    <main className="px-[20px]">
      <section className="py-[100px] flex flex-col items-center">
        <h2 className="text-center">
          i share my strategies, learnings, and practical approaches
        </h2>

        <div className="mt-20 flex flex-col gap-10">
          {insights.map((insight) => (
            <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group">
              <div className="flex flex-row gap-5">
                <time className="min-w-[80px] max-w-[80px] lg:min-w-[150px] lg:max-w-[150px] text-slate-600 dark:text-slate-400">
                  {insight.date ? format(parseISO(insight.date), "MMMM d, yyyy") : ""}
                </time>
                <div className="flex flex-col gap-2">
                  <h5 className="group-hover:text-primary group-hover:underline">
                    {insight.title}
                  </h5>
                  <small className="text-slate-600 dark:text-slate-400">
                    {insight.description}
                  </small>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
