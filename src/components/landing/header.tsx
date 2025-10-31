import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Header() {
  const logo = PlaceHolderImages.find(p => p.id === 'dps-anand-logo');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#ffffff]/100 backdrop-blur supports-[backdrop-filter]:bg-[#F7F7F7]/100">
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center gap-3 font-bold text-xl">
          {logo && (
            <Image
              src={logo.imageUrl}
              alt={logo.description}
              width={200}
              height={100}
              className="object-contain bg-[#F7F7F7] rounded-md p-1"
              data-ai-hint={logo.imageHint}
            />
          )}
        </Link>
      </div>
    </header>
  );
}

