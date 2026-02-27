import content from '@/lib/content.json';

const { admissionSteps } = content;

export default function AdmissionProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Simple 4-Step Admission Process</h2>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" aria-hidden="true"></div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-background border-4 border-primary/20 text-primary mx-auto mb-6 text-xl md:text-2xl font-bold font-headline shadow-lg transition-all duration-300 group-hover:border-primary group-hover:scale-110 group-hover:bg-primary/5">
                  {step.number}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 font-headline group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
