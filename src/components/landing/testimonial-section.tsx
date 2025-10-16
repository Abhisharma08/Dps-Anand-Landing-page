import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Parents Say</h2>
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
          <Quote className="h-16 w-16 text-accent absolute -top-8 -left-8 opacity-20" aria-hidden="true" />
          <blockquote className="text-xl md:text-2xl italic">
            "Choosing DPS Anand was the best decision for our child. The school's focus on overall development and the supportive nature of the teachers is truly commendable. We've seen remarkable growth in our daughter."
          </blockquote>
          <footer className="mt-6 font-semibold text-lg">- Anjali Sharma, Parent of a Grade 5 Student</footer>
          <Quote className="h-16 w-16 text-accent absolute -bottom-8 -right-8 opacity-20 transform rotate-180" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
