"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

// This tells Next.js to always render this page dynamically.
// It prevents the build error with `useSearchParams` during prerendering.
export const dynamic = 'force-dynamic';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const parentName = searchParams.get('parentName');
  const childName = searchParams.get('childName');

  useEffect(() => {
    if (!parentName || !childName) {
      router.replace('/');
    }
  }, [parentName, childName, router]);

  if (!parentName || !childName) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-4">
      <div className="max-w-2xl">
        <CheckCircle2 className="h-20 w-20 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Thank You, {parentName}!</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          We have received your inquiry for <span className="font-semibold">{childName}</span>. Our admissions team will get in touch with you shortly to guide you through the next steps.
        </p>
        <Button asChild size="lg">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}


export default function ThankYouPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ThankYouContent />
        </Suspense>
    )
}
