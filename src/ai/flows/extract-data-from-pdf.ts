'use server';
/**
 * @fileOverview Extracts data from a PDF document using Genkit.
 *
 * - extractDataFromPdf - Extracts investment figures, revenue projections, and impact data from a PDF.
 * - ExtractDataFromPdfInput - The input type for the extractDataFromPdf function.
 * - ExtractDataFromPdfOutput - The return type for the extractDataFromPdf function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractDataFromPdfInputSchema = z.object({
  pdfDataUri: z
    .string()
    .describe(
      "A PDF document as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ExtractDataFromPdfInput = z.infer<typeof ExtractDataFromPdfInputSchema>;

const ExtractDataFromPdfOutputSchema = z.object({
  investmentFigures: z.string().describe('Investment figures extracted from the PDF.'),
  revenueProjections: z.string().describe('Revenue projections extracted from the PDF.'),
  impactData: z.string().describe('Impact data extracted from the PDF.'),
});
export type ExtractDataFromPdfOutput = z.infer<typeof ExtractDataFromPdfOutputSchema>;

export async function extractDataFromPdf(input: ExtractDataFromPdfInput): Promise<ExtractDataFromPdfOutput> {
  return extractDataFromPdfFlow(input);
}

const prompt = ai.definePrompt({
  name: 'extractDataFromPdfPrompt',
  input: {schema: ExtractDataFromPdfInputSchema},
  output: {schema: ExtractDataFromPdfOutputSchema},
  prompt: `You are an AI assistant tasked with extracting key data points from PDF documents. Your goal is to identify and extract investment figures, revenue projections, and impact data. Return the extracted information in JSON format.

Analyze the following PDF content and extract the relevant information:

{{media url=pdfDataUri}}

Ensure the output is well-structured and easy to parse. Focus on extracting numerical data and related descriptions that provide context to the figures.
`,
});

const extractDataFromPdfFlow = ai.defineFlow(
  {
    name: 'extractDataFromPdfFlow',
    inputSchema: ExtractDataFromPdfInputSchema,
    outputSchema: ExtractDataFromPdfOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
