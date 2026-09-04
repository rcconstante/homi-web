import Image from 'next/image';
import Link from 'next/link';

type BrandProps = {
  compact?: boolean;
};

export default function Brand({ compact = false }: BrandProps) {
  return (
    <Link className="brand" href="/" aria-label="Homi home">
      <Image
        className="brand-icon"
        src="/app-icon.png"
        width={compact ? 38 : 44}
        height={compact ? 38 : 44}
        alt=""
        priority={!compact}
      />
      <span className={compact ? 'brand-name compact' : 'brand-name'}>Homi</span>
    </Link>
  );
}
