import clsx from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-block rounded border border-border bg-surface-container-high px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-on-surface-variant',
        className,
      )}
    >
      {children}
    </span>
  );
}
