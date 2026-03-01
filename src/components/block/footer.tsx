import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { getAllInsights } from "@/lib/insights";
import { getAllStudies } from "@/lib/studies";
import { getAllProjects } from "@/lib/projects";
import { BookOpen, Folder, Lightbulb } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export default async function Footer() {
  /*const contentLimit = 5;
  const insights = getAllInsights().slice(0, contentLimit);
  const studies = getAllStudies().slice(0, contentLimit);
  const projects = getAllProjects().slice(0, contentLimit);*/

  const insights = getAllInsights();
  const studies = getAllStudies();
  const projects = getAllProjects();

  const insightsCount = getAllInsights().length;
  const studiesCount = getAllStudies().length;
  const projectsCount = getAllProjects().length;

  return (
    <>
      {/* Contact */}
      <section className="px-[20px] py-[100px] flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-20">
            <h2 className="text-center">let&apos;s build something that works</h2>

            <div className="w-full max-w-[600px] space-y-5">
              <div>
                <Label htmlFor="email">
                  Email <span className="text-red-700">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="jkbicierro@gmail.com"
                  className="mt-2"
                />
              </div>
              <div className="flex gap-5">
                <div className="w-full">
                  <Label htmlFor="name">
                    Name <span className="text-red-700">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="John Bicierro"
                    className="mt-2"
                  />
                </div>

                <div className="w-full">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    type="text"
                    id="company"
                    placeholder="codekada"
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message">
                  Project Description <span className="text-red-700">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="A web dashboard for real-time analytics and reporting, designed to help teams make data-driven decisions faster."
                  className="mt-2 min-h-[100px] resize-none"
                />
              </div>
              <div className="mt-5 w-full flex justify-between items-start">
                <small className="text-slate-400">Email me instead</small>
                <Button className="">Get in Touch</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="px-[20px] py-[50px] mb-[25px] w-full flex justify-center">
        <div className="w-[1000px]">
          <span className="block mb-5 text-center lg:text-start">
            My latest case studies, insights, and projects
          </span>
          {/* Section 1 */}
          <div className="flex flex-col lg:flex-row text-center lg:text-start justify-between gap-10">
            {/* Case Studies */}
            <div className="space-y-2 flex flex-col items-center lg:items-start">
              <small className="flex gap-2 items-center">
                <BookOpen size={14} /> Case Studies ({studiesCount})
              </small>
              <ul className="flex flex-col items-center lg:items-start gap-2">
                {studies.map((study) => (
                  <li
                    key={study.slug}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 truncate text-xs"
                  >
                    <Link href={`/studies/${study.slug}`}>{study.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insights */}
            <div className="space-y-2 flex flex-col items-center lg:items-start">
              <small className="flex gap-2 items-center">
                <Lightbulb size={14} />
                Insights ({insightsCount})
              </small>
              <ul className="flex flex-col items-center lg:items-start gap-2">
                {insights.map((insight) => (
                  <li
                    key={insight.slug}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 truncate text-xs "
                  >
                    <Link href={`/insights/${insight.slug}`}>{insight.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div className="space-y-2 flex flex-col items-center lg:items-start">
              <small className="flex gap-2 items-center">
                <Folder size={14} />
                Projects ({projectsCount})
              </small>
              <ul className="flex flex-col items-center lg:items-start gap-2">
                {projects.map((project) => (
                  <li
                    key={project.slug}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 truncate text-xs"
                  >
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-5 flex items-center justify-between border-t pt-5">
            <div className="flex gap-5">
              <Avatar className="hidden lg:block w-[25px] h-[25px]">
                <AvatarImage
                  src="https://github.com/jkbicierro.png"
                  alt="John Bicierro"
                />
                <AvatarFallback>JB</AvatarFallback>
              </Avatar>

              <div className="flex gap-5">
                <Link href="#">
                  <small className="text-slate-600 dark:text-slate-400">Resume</small>
                </Link>
                <Link href="#">
                  <small className="text-slate-600 dark:text-slate-400">
                    Curriculum Vitae
                  </small>
                </Link>
                <Link href="/sitemap.xml">
                  <small className="text-slate-600 dark:text-slate-400">Sitemap</small>
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link href="https://www.linkedin.com/in/jkbicierro/" target="_blank">
                <FaLinkedin size={25} />
              </Link>
              <Link href="https://github.com/jkbicierro" target="_blank">
                <FaGithubSquare size={25} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
