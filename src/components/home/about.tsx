"use client";

import { Brain, ChartLine, Puzzle } from "lucide-react";
import { useEffect, useState } from "react";

const cardOrder = ["systems", "business", "alignment"];

export function About() {
  const [selected, setSelected] = useState<string>("systems");

  const meanings = {
    systems: "Seeing the bigger picture in every decision",
    business: "Every design choice impacts growth and outcomes",
    alignment: "Connecting design and code for a seamless experience",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => {
        const nextIndex = (cardOrder.indexOf(prev) + 1) % cardOrder.length;
        return cardOrder[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (key: string) => {
    setSelected(key);
  };

  const getCardStyle = (key: string) => {
    const isActive = selected === key;
    return {
      outer: `-z-50 p-1 rounded-full shadow-2xl transition-all duration-300 ${
        isActive
          ? "bg-blue-600 shadow-blue-500 scale-110"
          : "bg-slate-300 dark:bg-slate-500"
      }`,
      inner: `p-2 rounded-full ${isActive ? "bg-blue-500" : "bg-slate-400"}`,
      text: `${
        isActive ? "text-blue-500 " : "text-slate-600 dark:text-slate-400"
      } transition-colors duration-300`,
    };
  };

  return (
    <>
      <section className="py-[200px] flex flex-col items-center justify-center gap-5">
        <h2 className="text-center">clarity in every solution</h2>

        <p className="text-slate-600 dark:text-slate-400 text-center max-w-[500px]">
          {meanings[selected as keyof typeof meanings]}
        </p>

        <div className="flex gap-[80px] md:gap-[50px] mt-5 lg:mt-0 flex-wrap justify-center">
          {/* Card 1 */}
          <div
            className="cursor-pointer h-[100px] flex flex-col md:flex-row items-center gap-5"
            onClick={() => handleClick("systems")}
          >
            <div className={getCardStyle("systems").outer}>
              <div className={getCardStyle("systems").inner}>
                <Brain className="text-white" />
              </div>
            </div>
            <h5 className={getCardStyle("systems").text}>Systems Thinking</h5>
          </div>

          {/* Card 2 */}
          <div
            className="cursor-pointer h-[100px] flex flex-col md:flex-row items-center gap-5"
            onClick={() => handleClick("business")}
          >
            <div className={getCardStyle("business").outer}>
              <div className={getCardStyle("business").inner}>
                <ChartLine className="text-white" />
              </div>
            </div>
            <h5 className={getCardStyle("business").text}>Business Impact</h5>
          </div>

          {/* Card 3 */}
          <div
            className="cursor-pointer h-[100px] flex flex-col md:flex-row items-center gap-5"
            onClick={() => handleClick("alignment")}
          >
            <div className={getCardStyle("alignment").outer}>
              <div className={getCardStyle("alignment").inner}>
                <Puzzle className="text-white" />
              </div>
            </div>
            <h5 className={getCardStyle("alignment").text}>Design + Dev Alignment</h5>
          </div>
        </div>
      </section>
    </>
  );
}
