import { BrainCircuit, HeartHandshake, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import content from '@/lib/content.json';

const { whyChooseUsFeatures } = content;

const icons: { [key: string]: React.ReactNode } = {
  BrainCircuit: <BrainCircuit className="h-10 w-10 text-primary" />,
  HeartHandshake: <HeartHandshake className="h-10 w-10 text-primary" />,
  Users: <Users className="h-10 w-10 text-primary" />,
};

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">A Structured Pathway to Academic Distinction</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUsFeatures.map((feature, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-primary group">
              <CardHeader className="items-center gap-4 pb-2">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-2">
                  {icons[feature.icon]}
                </div>
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
