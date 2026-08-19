import Image from 'next/image';

interface TechIconProps {
  icon: string;
  name: string;
  className?: string;
}

export function TechIcon({ icon, name, className = 'h-8 w-8' }: TechIconProps) {
  return (
    <Image
      src={icon}
      alt=""
      width={40}
      height={40}
      className={`object-contain ${className}`}
      aria-hidden
    />
  );
}
