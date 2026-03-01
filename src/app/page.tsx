import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { About } from "@/components/home/about";
import { getAllStudies } from "@/lib/studies";
import { format, parseISO } from "date-fns";
import { getAllProjects } from "@/lib/projects";
import { getAllInsights } from "@/lib/insights";

export default async function Page() {
  const insights = getAllInsights().slice(0, 3);
  const projects = getAllProjects().slice(0, 3);
  const studies = getAllStudies().slice(0, 3);

  return (
    <main className="px-[20px]">
      <Hero />

      <Logos />

      <About />

      <Process />

      <Cases studies={studies} />

      <Insights insights={insights} />

      <Projects projects={projects} />
    </main>
  );
}

function Logos() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-5 ">
        <small className="uppercase text-slate-600 dark:text-slate-400">
          People and teams I&apos;ve worked with
        </small>
        <div className="grid grid-cols-4 lg:grid-cols-5 gap-10">
          <Image
            src="/assets/adnu.png"
            alt="Ateneo de Naga University | John Bicierro"
            width={700}
            height={700}
            className="h-[40px] w-[40px] object-contain"
          />

          <Image
            src="/assets/caceres.png"
            alt="Archdiocese of Caceres | John Bicierro"
            width={700}
            height={700}
            className="h-[40px] w-[40px] object-contain"
          />
          <Image
            src="/assets/biscast.png"
            alt="Biscat | John Bicierro"
            width={700}
            height={700}
            className="h-[40px] w-[40px] object-contain"
          />
          <Image
            src="/assets/codekada.png"
            alt="Codekada | John Bicierro"
            width={700}
            height={700}
            className="h-[40px] w-[40px] object-contain"
          />
          <Image
            src="/assets/csguild.png"
            alt="CS Guild | John Bicierro"
            width={700}
            height={700}
            className="h-[40px] w-[40px] object-contain"
          />

          {/* <div className="border-2 border-dotted rounded-full h-[40px] w-[40px] flex items-center justify-center cursor-pointer">
              <Plus size={16} className="text-slate-600 dark:text-slate-400" />
            </div> */}
        </div>
      </div>
    </section>
  );
}

function Insights({ insights }: { insights: ReturnType<typeof getAllInsights> }) {
  return (
    <section className="py-[100px] flex flex-col items-center">
      <h2 className="text-center">what building software continually teaches me</h2>

      <div className="mt-20 grid grid-cols-1 gap-10">
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

      <Button variant={"link"} asChild>
        <Link href="/insights" className="mt-10">
          View more insights <ChevronRight />
        </Link>
      </Button>
    </section>
  );
}

function Process() {
  return (
    <section className="py-[100px] flex flex-col items-center ">
      <h2 className="text-center">how i turn business needs into scalable software</h2>

      <div className="mt-20 flex flex-col items-center gap-5">
        <Separator
          orientation="vertical"
          className="w-[2px] h-[300px] bg-gradient-to-b from-background to-blue-500"
        />
        {/* First Step: Card */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <h5 className="text-white border-4 border-blue-600 font-pacifico bg-blue-500 h-[40px] w-[40px] rounded-full flex items-center justify-center">
              1
            </h5>
            <div className="animate-ping absolute bg-blue-500 h-[30px] w-[30px] rounded-full -z-10"></div>
          </div>

          <div className="text-center p-5 space-y-5">
            <h3>understand the problem</h3>
            <p className="text-slate-600 dark:text-slate-400">
              I start with the &quot;why&quot;, not just the feature list.
            </p>
          </div>
        </div>
        <Separator orientation="vertical" className="w-[2px] h-[300px] bg-blue-500" />
        {/* Second Step: Card */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <h5 className="text-white border-4 border-blue-600 font-pacifico bg-blue-500 h-[40px] w-[40px] rounded-full flex items-center justify-center">
              2
            </h5>
            <div className="animate-ping absolute bg-blue-500 h-[30px] w-[30px] rounded-full -z-10"></div>
          </div>

          <div className="p-5 space-y-5 text-center">
            <h3>plan for scale</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Architecture first, clean data flow, right tools, long-term thinking.
            </p>
          </div>
        </div>
        <Separator orientation="vertical" className="w-[2px] h-[300px] bg-blue-500" />
        {/* Third Step: Card */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <h5 className="text-white border-4 border-blue-600 font-pacifico bg-blue-500 h-[40px] w-[40px] rounded-full flex items-center justify-center">
              3
            </h5>
            <div className="animate-ping absolute bg-blue-500 h-[30px] w-[30px] rounded-full -z-10"></div>
          </div>
          <div className="p-5 space-y-5 text-center">
            <h3>design with intent</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Interfaces that reduce friction and enhance flow.
            </p>
          </div>
        </div>
        <Separator orientation="vertical" className="w-[2px] h-[300px] bg-blue-500" />
        {/* Fourth Step: Card */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <h5 className="text-white border-4 border-blue-600 font-pacifico bg-blue-500 h-[40px] w-[40px] rounded-full flex items-center justify-center">
              4
            </h5>
            <div className="animate-ping absolute bg-blue-500 h-[30px] w-[30px] rounded-full -z-10"></div>
          </div>

          <div className="p-5 space-y-5 text-center">
            <h3>build precisely</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Modular code, performance-focused, written to last.
            </p>
          </div>
        </div>
        <Separator orientation="vertical" className="w-[2px] h-[300px] bg-blue-500" />
        {/* Last Step: Card */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <h5 className="text-white border-4 border-blue-600 font-pacifico bg-blue-500 h-[40px] w-[40px] rounded-full flex items-center justify-center">
              5
            </h5>
            <div className="animate-ping absolute bg-blue-500 h-[30px] w-[30px] rounded-full -z-10"></div>
          </div>

          <div className="p-5 space-y-5 text-center">
            <h3>deliver and improve</h3>
            <p className="text-slate-600 dark:text-slate-400">
              I ship fast, learn from feedback, and optimize continuously.
            </p>
            <Button variant={"link"} asChild>
              <Link href="/insights">
                Read my latest insights <ChevronRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="py-[100px] flex items-center justify-center">
      <div className="w-[650px] flex flex-col items-center text-center justify-center gap-5">
        <h1 className="font-medium space-y-5 text-nowrap">
          <div className="flex gap-2 items-center justify-center">
            <span>designed to</span>
            simplify,
          </div>

          <div className="flex items-center justify-center gap-2">
            <span>engineered to</span>
            scale
          </div>
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Built to improve how businesses operate, not just how they look
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/studies">View my Case Studies</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/insights">Explore my Process</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Projects({ projects }: { projects: ReturnType<typeof getAllProjects> }) {
  return (
    <section className="py-[100px] flex flex-col items-center">
      <h2 className="text-center">a few things i&apos;ve worked on</h2>
      {/* Cards */}
      <div className="mt-20">
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
                    {project.date ? format(parseISO(project.date), "MMMM d, yyyy") : ""}
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

      <Button variant={"link"} asChild>
        <Link href="/projects" className="mt-10">
          See more of my projects <ChevronRight />
        </Link>
      </Button>
    </section>
  );
}

function Cases({ studies }: { studies: ReturnType<typeof getAllStudies> }) {
  return (
    <section className="py-[100px] flex flex-col items-center">
      <h2 className="text-center">
        from messy requirements to clear and scalable architectures
      </h2>

      <div className="mt-20 w-full lg:w-[1000px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {studies.map((study) => (
            <article key={study.slug} className="w-full">
              <Link
                href={`/studies/${study.slug}`}
                aria-label={`Case Study: ${study.title}`}
                className="group"
              >
                <Image
                  src={`/assets/liquid/3.png`}
                  alt={study.title}
                  height={800}
                  width={800}
                  className="border rounded-xl h-[250px] lg:h-[350px] w-full"
                />

                <h3 className="text-base mt-4 truncate group-hover:text-primary group-hover:underline">
                  {study.title}
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <small>{study.type}</small>
                  <time
                    dateTime={study.date}
                    className="text-sm text-slate-600 dark:text-slate-400"
                  >
                    {study.date ? format(parseISO(study.date), "MMMM d, yyyy") : ""}
                  </time>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <Button variant={"link"} className="mt-10" asChild>
        <Link href="/studies">
          Explore my Case Studies <ChevronRight />
        </Link>
      </Button>
    </section>
  );
}
