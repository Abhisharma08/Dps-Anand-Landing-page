'use server';

/**
 * @fileOverview Generates a personalized digital brochure for DPS Anand based on parent's query.
 *
 * - generateDigitalBrochure - A function that generates the digital brochure.
 * - GenerateDigitalBrochureInput - The input type for the generateDigitalBrochure function.
 * - GenerateDigitalBrochureOutput - The return type for the generateDigitalBrochure function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDigitalBrochureInputSchema = z.object({
  parentName: z.string().describe("Parent's full name."),
  email: z.string().email().describe("Parent's email address."),
  mobileNumber: z.string().describe("Parent's mobile number."),
  childName: z.string().describe("Child's name."),
  gradeApplyingFor: z.string().describe('Grade applying for.'),
});
export type GenerateDigitalBrochureInput = z.infer<typeof GenerateDigitalBrochureInputSchema>;

const GenerateDigitalBrochureOutputSchema = z.object({
  brochureContent: z.string().describe('The generated digital brochure content in HTML format.'),
});
export type GenerateDigitalBrochureOutput = z.infer<typeof GenerateDigitalBrochureOutputSchema>;

export async function generateDigitalBrochure(input: GenerateDigitalBrochureInput): Promise<GenerateDigitalBrochureOutput> {
  return generateDigitalBrochureFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDigitalBrochurePrompt',
  input: {schema: GenerateDigitalBrochureInputSchema},
  output: {schema: GenerateDigitalBrochureOutputSchema},
  prompt: `You are an AI assistant tasked with generating a personalized digital brochure for DPS Anand, a prestigious school. Use the information provided to tailor the brochure content to the parent's interest. The brochure should include key details about the school, student testimonials, and faculty information. The output should be a single HTML file content.

Parent's Name: {{{parentName}}}
Child's Name: {{{childName}}}
Email: {{{email}}}
Mobile Number: {{{mobileNumber}}}
Grade Applying For: {{{gradeApplyingFor}}}

Here is the brochure template. Use TailwindCSS classes for styling.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Personalized Brochure for DPS Anand</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="font-sans bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <header class="text-center mb-8">
            <h1 class="text-4xl font-bold text-green-700">DPS Anand - Discover Excellence in Education</h1>
        </header>
        
        <main>
            <p class="text-lg mb-6">Dear {{{parentName}}},</p>
            <p class="text-lg mb-8">Thank you for your interest in DPS Anand for your child, <span class="font-semibold">{{{childName}}}</span>. We are thrilled to provide you with a personalized overview of our school.</p>

            <section class="mb-8">
                <h2 class="text-2xl font-semibold text-green-700 border-b-2 border-orange-500 pb-2 mb-4">Why Choose DPS Anand?</h2>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li>World-Class CBSE Curriculum</li>
                    <li>Holistic Student Development</li>
                    <li>Experienced & Nurturing Faculty</li>
                    <li>State-of-the-art campus and facilities</li>
                </ul>
            </section>

            <section class="mb-8">
                <h2 class="text-2xl font-semibold text-green-700 border-b-2 border-orange-500 pb-2 mb-4">Details for Grade {{{gradeApplyingFor}}}</span></h2>
                <div class="bg-green-50 p-4 rounded-lg">
                    <p class="text-gray-800">For students like {{{childName}}} entering Grade {{{gradeApplyingFor}}}, we offer a specialized curriculum focusing on building strong foundational skills while encouraging curiosity and creativity. Our approach for this grade includes project-based learning, interactive digital classrooms, and a wide array of co-curricular activities to ensure well-rounded development.</p>
                </div>
            </section>

            <section class="mb-8">
                <h2 class="text-2xl font-semibold text-green-700 border-b-2 border-orange-500 pb-2 mb-4">What Our Parents Say</h2>
                <div class="bg-gray-100 p-6 rounded-lg italic">
                    <p class="text-gray-700">"Choosing DPS Anand was the best decision for our child. The school's focus on overall development and the supportive nature of the teachers is truly commendable. We've seen remarkable growth in our daughter."</p>
                    <p class="text-right font-semibold mt-4">- Anjali Sharma, Parent of a Grade 5 Student</p>
                </div>
            </section>

            <section class="text-center">
                <h2 class="text-2xl font-semibold text-green-700 mb-4">Ready for the Next Step?</h2>
                <p class="text-lg mb-6">To learn more and experience our campus first-hand, schedule a personalized campus tour today!</p>
                <p class="text-gray-600">Our admissions team is available at admissions@dpsanand.com.</p>
            </section>
        </main>
        
        <footer class="text-center text-sm text-gray-500 mt-12">
            <p>&copy; ${new Date().getFullYear()} DPS Anand. All Rights Reserved. A brighter future starts here.</p>
        </footer>
    </div>
</body>
</html>
`,
});

const generateDigitalBrochureFlow = ai.defineFlow(
  {
    name: 'generateDigitalBrochureFlow',
    inputSchema: GenerateDigitalBrochureInputSchema,
    outputSchema: GenerateDigitalBrochureOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
