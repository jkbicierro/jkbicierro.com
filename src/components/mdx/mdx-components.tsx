import type { MDXComponents } from "mdx/types";
import { ComponentProps } from "react";

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
  h1: (props: ComponentProps<"h1">) => <h1 className="text-4xl  mb-5" {...props} />,
  h2: (props: ComponentProps<"h2">) => <h2 className="text-3xl mb-4 mt-8" {...props} />,
  h3: (props: ComponentProps<"h3">) => <h3 className="text-2xl  mb-3 mt-6" {...props} />,
  p: (props: ComponentProps<"p">) => <p className="mb-4 leading-7" {...props} />,
  code: (props: ComponentProps<"code">) => <code className="text-sm" {...props} />,
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg mb-4 overflow-x-auto text-sm"
      {...props}
    />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
