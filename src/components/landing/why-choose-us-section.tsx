import { BrainCircuit, HeartHandshake, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Academic Excellence',
    description: 'Our CBSE-affiliated curriculum fosters critical thinking, creativity, and a lifelong love for learning, preparing students for future success.',
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: 'Holistic Development',
    description: 'We focus on the complete growth of every child, balancing academics with robust programs in arts, sports, and leadership.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'World-Class Faculty',
    description: 'Our passionate and experienced educators provide personalized attention in a child-friendly atmosphere to nurture each student\'s potential.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">An Education That Inspires Excellence</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader className="items-center gap-4">
                {feature.icon}
                <CardTitle className="font-headline">{feature.title}</CardTitle>
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
