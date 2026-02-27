"use client";

import { Button } from '@/components/ui/button';

export default function FloatingInquiryButton() {
  const scrollToForm = () => {
    const el = document.getElementById("form-scrl");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden text-primary-foreground">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[150%] bg-white rounded-full blur-3xl transform rotate-12" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[100%] bg-white rounded-full blur-3xl transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold font-headline mb-4 tracking-tight">
          Ready to Begin Your Journey with Us?
        </h2>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-primary-foreground/90 mb-10">
          Fill out the form at the top of the page to get started with our simple admission process for 2026.
        </p>
        <Button
          size="lg"
          className="bg-background text-primary hover:bg-slate-100 font-bold text-lg px-10 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          onClick={scrollToForm}
        >
          Enquire Now
        </Button>
      </div>
    </section>
  );
}
