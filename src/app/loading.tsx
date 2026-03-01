import { Spinner } from "@/components/ui/spinner";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-2 bg-background z-[999] px-[20px]">
      <Spinner className="text-primary w-5 h-5" />
      <h5 className="text-lg">Loading resources...</h5>
      <p className="text-center text-sm dark:text-zinc-400 text-zinc-800">
        Please wait while we load the content. Do not refresh the page.
      </p>
    </div>
  );
}
