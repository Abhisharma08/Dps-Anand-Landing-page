import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { InquiryForm } from '@/components/landing/inquiry-form';

export default function HeroSection() {
  return (
    <section
      id="inquiry-form"
      className="relative w-full flex items-center justify-center text-white py-24 md:py-16"
    >
      {/* 🔹 Background Image from Cloudinary */}
      <Image
        src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1770727979/WhatsApp_Image_2026-02-10_at_6.18.37_PM_apkztl.jpg"
        alt="DPS Anand school building"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay with gradient for better premium look */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/50" />

      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold font-headline tracking-tight leading-tight">
              Integrated JEE/NEET Program at DPS Anand
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-200">
              At DPS Anand, CBSE academics integrate with guided JEE/NEET preparation. Learn from expert Physics Wallah faculty and experienced school teachers in one structured program. Admissions 2026–27 now open.
            </p>

            <ul className="space-y-4 text-left self-center md:self-start text-lg mt-4 w-full max-w-lg">
              <li className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 shadow-sm transition-transform hover:-translate-y-1">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="font-semibold">Limited Seats – 50 for JEE | 50 for NEET</span>
              </li>
              <li className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 shadow-sm transition-transform hover:-translate-y-1">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="font-semibold">Integrated Academic Planning</span>
              </li>
              <li className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 shadow-sm transition-transform hover:-translate-y-1">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="font-semibold">Learn from Expert PW Faculty & Experienced School Teachers</span>
              </li>
              <li className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 shadow-sm transition-transform hover:-translate-y-1">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="font-semibold">100% School Curriculum Covered</span>
              </li>
            </ul>
          </div>

          <div className="w-full max-w-md mx-auto">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
