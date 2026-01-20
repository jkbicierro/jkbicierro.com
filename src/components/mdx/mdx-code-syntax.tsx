"use client";

import { ComponentProps } from "react";
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark, oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

export function CodeStyle({ className, children, ...props }: ComponentProps<"code">) {
  const { resolvedTheme } = useTheme();
  const languageMatch = /language-([^\s]+)/.exec(className || "");
  const language = languageMatch?.[1];
  const codeString = String(children).replace(/\n$/, "");
  const themeStyle = resolvedTheme === "dark" ? coldarkDark : oneLight;

  if (language) {
    return (
      <SyntaxHighlighter
        language={language}
        style={themeStyle}
        PreTag="div"
        customStyle={{ borderRadius: "24px", padding: "16px", fontSize: "14px" }}
      >
        {codeString}
      </SyntaxHighlighter>
    );
  }
  return (
    <code className="text-sm" {...props}>
      {children}
    </code>
  );
}
