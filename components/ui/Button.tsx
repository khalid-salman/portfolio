import clsx from 'clsx';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary-container text-on-primary-container font-mono uppercase tracking-wider hover:shadow-glow',
  secondary:
    'border border-primary-container text-primary-container font-mono uppercase tracking-wider hover:bg-primary-container/10',
  ghost:
    'border border-border text-primary font-mono uppercase tracking-wider hover:bg-surface-container-high',
};

type BaseProps = {
  variant?: Variant;
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

export function Button({ variant = 'primary', className, ...props }: Props) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 rounded px-6 py-3 text-sm font-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container',
    variants[variant],
    className,
  );

  if ('href' in props && props.href) {
    const { href, ...rest } = props as LinkProps;
    return <a href={href} className={classes} {...rest} />;
  }

  return <button className={classes} {...(props as ButtonProps)} />;
}
