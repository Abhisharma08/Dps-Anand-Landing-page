import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TrustBar() {
  const cbseLogo = PlaceHolderImages.find(p => p.id === 'cbse-logo');
  const dpsLogo = PlaceHolderImages.find(p => p.id === 'dps-society-logo');
  const pwLogo = PlaceHolderImages.find(p => p.id === 'pw-logo');


  return (
    <section className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <span className="text-md font-semibold text-muted-foreground whitespace-nowrap">
              Affiliated & Recognized By:
            </span>
            {cbseLogo && <Image src={cbseLogo.imageUrl} alt={cbseLogo.description} width={80} height={80} data-ai-hint={cbseLogo.imageHint} className="opacity-70 transition-opacity hover:opacity-100 object-contain w-16 h-16 md:w-20 md:h-20" />}
            {dpsLogo && <Image src={dpsLogo.imageUrl} alt={dpsLogo.description} width={70} height={70} data-ai-hint={dpsLogo.imageHint} className="opacity-70 transition-opacity hover:opacity-100 object-contain w-14 h-14 md:w-[70px] md:h-[70px]" />}
            {pwLogo && <Image src={pwLogo.imageUrl} alt={pwLogo.description} width={50} height={50} data-ai-hint={pwLogo.imageHint} className="opacity-90 transition-opacity hover:opacity-100 object-contain mix-blend-multiply dark:mix-blend-normal" />}
          </div>
        </div>
      </div>
    </section>
  );
}
