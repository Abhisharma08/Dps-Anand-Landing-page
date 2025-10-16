import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is the student-to-teacher ratio?',
    answer: 'We maintain a favorable student-to-teacher ratio of 25:1 to ensure personalized attention and effective learning for every child.',
  },
  {
    question: 'What curriculum do you follow?',
    answer: 'We are affiliated with the Central Board of Secondary Education (CBSE), New Delhi, and integrate modern, inquiry-based teaching methodologies to foster a love for learning.',
  },
  {
    question: 'Do you provide transportation services?',
    answer: 'Yes, we offer a safe and secure bus transportation service covering all major routes in the city. All buses are GPS-enabled and have trained staff on board.',
  },
  {
    question: 'What are the school timings?',
    answer: 'The school operates from 8:00 AM to 2:30 PM, Monday to Friday. Optional after-school activities are available until 4:00 PM.',
  }
];

export default function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
