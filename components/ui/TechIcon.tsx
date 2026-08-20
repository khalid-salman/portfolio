import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

interface TechIconProps {
  icon: string;
  name: string;
  slug?: string;
  className?: string;
}

/** Near-black logos — tinted #0d549c in dark theme for contrast. */
const DARK_RECOLOR = new Set(['ibm-mq', 'bash']);

export function TechIcon({ icon, name, slug, className = 'h-8 w-8' }: TechIconProps) {
  const src = assetPath(icon);
  const recolorInDark = slug ? DARK_RECOLOR.has(slug) : false;

  if (recolorInDark) {
    return (
      <>
        <span
          role="img"
          aria-hidden
          title={name}
          className={`tech-icon-dark-only tech-icon-dark-tint inline-block bg-contain bg-center bg-no-repeat ${className}`}
          style={{
            WebkitMaskImage: `url(${src})`,
            maskImage: `url(${src})`,
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
          }}
        />
        <Image
          src={src}
          alt=""
          width={40}
          height={40}
          className={`tech-icon-light-only object-contain ${className}`}
          aria-hidden
        />
      </>
    );
  }

  return (
    <Image
      src={src}
      alt=""
      width={40}
      height={40}
      className={`object-contain ${className}`}
      aria-hidden
    />
  );
}
