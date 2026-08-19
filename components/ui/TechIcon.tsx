import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

interface TechIconProps {
  icon: string;
  name: string;
  className?: string;
}

export function TechIcon({ icon, name, className = 'h-8 w-8' }: TechIconProps) {
  return (
    <Image
      src={assetPath(icon)}
      alt=""
      width={40}
      height={40}
      className={`object-contain ${className}`}
      aria-hidden
    />
  );
}
