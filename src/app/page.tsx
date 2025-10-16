import {
  Header,
  HeroSection,
  TrustBar,
  WhyChooseUsSection,
  AdmissionProcessSection,
  GallerySection,
  TestimonialSection,
  FaqSection,
  FinalCtaSection,
  Footer,
  FloatingInquiryButton,
} from '@/components/landing';

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
