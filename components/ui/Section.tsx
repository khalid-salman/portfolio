interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={className ?? 'scroll-mt-20 py-16 md:py-24'}>
      <div className="relative z-10 mx-auto max-w-container px-4 sm:px-6 lg:px-12">
        <h2 className="mb-8 inline-block border-b border-border pb-2 font-mono text-sm uppercase tracking-[0.2em] text-primary-container">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
