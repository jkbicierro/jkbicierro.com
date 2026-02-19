"use client";

import React from "react";
import { Button } from "../ui/button";
import { Share } from "lucide-react";

type Props = {
  title: string;
};

export default function ShareButton({ title }: Props) {
  async function copyToClipboard() {
    try {
      const currentUrl = window.location.toString();
      await navigator.clipboard.writeText(currentUrl);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  }

  return (
    <Button variant={"outline"} onClick={copyToClipboard}>
      <Share size={16} /> Share Link
      <span className="hidden lg:block">&quot;{title}&quot;</span>
    </Button>
  );
}
