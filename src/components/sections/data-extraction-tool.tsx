'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { extractDataFromPdf, type ExtractDataFromPdfOutput } from '@/ai/flows/extract-data-from-pdf';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2, FileUp, Cpu, BarChart, LineChart } from 'lucide-react';

const formSchema = z.object({
    pdfFile: z.custom<FileList>().refine(files => files && files.length === 1, 'A single PDF file is required.'),
});

type FormSchema = z.infer<typeof formSchema>;

export default function DataExtractionTool() {
    const [extractedData, setExtractedData] = useState<ExtractDataFromPdfOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (values: FormSchema) => {
        setIsLoading(true);
        setExtractedData(null);
        form.reset();

        const file = values.pdfFile[0];
        if (file.type !== 'application/pdf') {
            toast({
                variant: 'destructive',
                title: 'Invalid File Type',
                description: 'Please upload a valid PDF file.',
            });
            setIsLoading(false);
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = async () => {
            try {
                const pdfDataUri = reader.result as string;
                const result = await extractDataFromPdf({ pdfDataUri });
                setExtractedData(result);
                toast({
                    title: 'Extraction Successful',
                    description: 'Data has been extracted from the PDF.',
                });
            } catch (error) {
                console.error('Extraction failed:', error);
                toast({
                    variant: 'destructive',
                    title: 'Extraction Failed',
                    description: 'Could not extract data from the provided PDF. Please try another file.',
                });
            } finally {
                setIsLoading(false);
            }
        };

        reader.onerror = () => {
            toast({
                variant: 'destructive',
                title: 'File Read Error',
                description: 'There was an error reading your file.',
            });
            setIsLoading(false);
        };
    };

    return (
        <section id="ai-tool" className="w-full py-20 md:py-28 lg:py-32 bg-secondary/50">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-bold tracking-wider uppercase text-primary">GenAI Analysis</span>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">Dynamic Data Extraction</h2>
                    <p className="mt-4 text-muted-foreground">
                        Leverage AI to analyze feasibility studies and other documents. Upload a PDF to dynamically extract key metrics and populate website content.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileUp className="w-6 h-6" />
                                <span>Upload Feasibility Study</span>
                            </CardTitle>
                            <CardDescription>Select a PDF document to begin the AI analysis.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="pdfFile"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>PDF Document</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="file"
                                                        accept="application/pdf"
                                                        onChange={(e) => field.onChange(e.target.files)}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" disabled={isLoading} className="w-full">
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Analyzing...
                                            </>
                                        ) : 'Extract Data'}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>

                    <div className="space-y-4">
                        <h3 className="font-headline text-2xl font-bold flex items-center gap-2">
                            <Cpu className="w-7 h-7" />
                            <span>Extracted Results</span>
                        </h3>
                        {isLoading && (
                             <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg h-full">
                                <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
                                <p className="text-muted-foreground">AI is processing the document...</p>
                            </div>
                        )}
                        {!isLoading && !extractedData && (
                            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg h-full">
                                <p className="text-muted-foreground text-center">Upload a PDF to see extracted data here.</p>
                            </div>
                        )}
                        {extractedData && (
                            <div className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-primary">
                                            <BarChart className="w-5 h-5"/>
                                            Investment Figures
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{extractedData.investmentFigures}</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-primary">
                                            <LineChart className="w-5 h-5"/>
                                            Revenue Projections
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{extractedData.revenueProjections}</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-primary">
                                            <Users className="w-5 h-5"/>
                                            Impact Data
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{extractedData.impactData}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
