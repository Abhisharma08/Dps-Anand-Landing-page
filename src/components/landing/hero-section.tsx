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

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight">
              Shape Your Child&apos;s Future at DPS Anand
            </h1>
            <p className="text-lg md:text-xl text-slate-200">
              We provide an educational experience that enables students to become responsible, knowledgeable,
              and productive citizens in a global society. Admissions for the 2027–28 academic year are now open.
            </p>

            <ul className="space-y-3 text-left self-center md:self-start text-lg">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                <span className="font-semibold">World-Class CBSE Curriculum</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                <span className="font-semibold">Holistic Student Development</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                <span className="font-semibold">Experienced & Nurturing Faculty</span>
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
