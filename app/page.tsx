import { ThemeSwitch } from "@/components/theme-switch";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex justify-end w-full max-w-xl pb-4">
        <ThemeSwitch />
      </div>
      <div className="inline-block max-w-xl text-center justify-center">
        <span>Make&nbsp;</span>
        <span>beautiful&nbsp;</span>
        <br />
        <span>
          websites regardless of your design experience.
        </span>
        <div>
          Beautiful, fast and modern React UI library.
        </div>
      </div>
      <div className="mt-8">
        <div className="flex items-center gap-2 rounded-xl bg-surface shadow-surface px-4 py-2">
          <pre className="text-sm  font-mediumfont-mono">
            Get started by editing{" "}
            <code className="px-2 py-1 h-fit font-mono font-normal inline whitespace-nowrap rounded-sm bg-accent-soft-hover text-accent text-sm">
              app/page.tsx
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}