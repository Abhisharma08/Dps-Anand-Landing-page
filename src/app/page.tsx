import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import TrustBar from '@/components/landing/trust-bar';
import WhyChooseUsSection from '@/components/landing/why-choose-us-section';
import AdmissionProcessSection from '@/components/landing/admission-process-section';
import GallerySection from '@/components/landing/gallery-section';
import TestimonialSection from '@/components/landing/testimonial-section';
import FaqSection from '@/components/landing/faq-section';
import FinalCtaSection from '@/components/landing/final-cta-section';
import Footer from '@/components/landing/footer';
import FloatingInquiryButton from '@/components/landing/floating-inquiry-button';

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <WhyChooseUsSection />
        <AdmissionProcessSection />
        <GallerySection />
        <TestimonialSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <FloatingInquiryButton />
    </div>
  );
}
