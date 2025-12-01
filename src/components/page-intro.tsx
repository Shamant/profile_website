import { ReactNode } from "react";

type PageIntroProps = {
  eyebrow?: ReactNode;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-16">
      <div className="flex flex-col gap-4">
        {eyebrow ? (
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
            {eyebrow}
          </div>
        ) : null}
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="max-w-3xl text-base leading-7 text-slate-600">
          {description}
        </p>
      </div>
    </section>
  );
}

