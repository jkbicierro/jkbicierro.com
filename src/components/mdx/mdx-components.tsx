import type { MDXComponents } from "mdx/types";
import { ComponentProps } from "react";
import { CodeStyle } from "./mdx-code-syntax";

const components = {
  table: (props: ComponentProps<"table">) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-gray-300" {...props} />
    </div>
  ),
  th: (props: ComponentProps<"th">) => (
    <th className="border px-4 py-2 bg-gray-100 text-left" {...props} />
  ),
  td: (props: ComponentProps<"td">) => <td className="border px-4 py-2" {...props} />,
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote className="" {...props} />
  ),
  h1: (props: ComponentProps<"h1">) => (
    <h1 className="text-2xl lg:text-3xl mb-5" {...props} />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="text-xl lg:text-2xl mb-4 mt-8" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 className="text-base lg:text-xl mb-3 mt-6" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p
      className="text-sm lg:text-base dark:text-slate-200 text-slate-800 mb-4 leading-7 text-justify"
      {...props}
    />
  ),
  li: (props: ComponentProps<"li">) => (
    <li
      className="list-disc text-sm lg:text-base dark:text-slate-200 text-slate-800 mb-2 ml-6 leading-7"
      {...props}
    />
  ),
  code: CodeStyle,
  pre: ({ children }: ComponentProps<"pre">) => <>{children}</>,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
