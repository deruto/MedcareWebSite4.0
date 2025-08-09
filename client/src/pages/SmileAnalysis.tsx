import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertSmileAnalysisSchema } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Upload, CreditCard, Loader2, CloudUpload } from 'lucide-react';
import type { z } from 'zod';

type SmileAnalysisForm = z.infer<typeof insertSmileAnalysisSchema>;

export default function SmileAnalysis() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<SmileAnalysisForm>({
    resolver: zodResolver(insertSmileAnalysisSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      imagePath: ''
    }
  });

  const analysisMutation = useMutation({
    mutationFn: async (data: SmileAnalysisForm) => {
      const response = await apiRequest('POST', '/api/smile-analysis', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Analysis Submitted!",
        description: "Your smile analysis request has been submitted. We'll contact you shortly with payment details.",
      });
      form.reset();
      setSelectedFile(null);
      queryClient.invalidateQueries({ queryKey: ['/api/smile-analysis'] });
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to submit analysis request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // In a real implementation, you would upload the file to a server
      // For now, we'll just store the filename
      form.setValue('imagePath', file.name);
    }
  };

  const onSubmit = (data: SmileAnalysisForm) => {
    if (!selectedFile) {
      toast({
        title: "File Required",
        description: "Please upload a smile photo to continue.",
        variant: "destructive",
      });
      return;
    }
    analysisMutation.mutate(data);
  };

  return (
    <div>
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-neutral-800 mb-6">Digital Smile Analysis</h1>
          <p className="text-xl text-neutral-600 mb-12">
            Upload your smile for a professional digital preview and personalized treatment plan
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* File Upload Area */}
                <div className="border-2 border-dashed border-neutral-300 rounded-xl p-8 hover:border-primary transition-colors duration-300">
                  <div className="text-center">
                    <CloudUpload className="mx-auto h-16 w-16 text-neutral-400 mb-4" />
                    <p className="text-lg font-semibold text-neutral-700 mb-2">Upload Your Smile Photo</p>
                    <p className="text-neutral-500 mb-4">Drag and drop or click to select (JPG, PNG up to 10MB)</p>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      id="smile-upload"
                      onChange={handleFileChange}
                    />
                    <label 
                      htmlFor="smile-upload" 
                      className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold cursor-pointer transition-colors duration-300 inline-flex items-center"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Choose File
                    </label>
                    {selectedFile && (
                      <p className="mt-4 text-sm text-green-600 font-medium">
                        Selected: {selectedFile.name}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="bg-primary-light/20 rounded-xl p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">₹2,500</div>
                    <p className="text-neutral-600">Professional Digital Analysis</p>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-dark text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  disabled={analysisMutation.isPending}
                >
                  {analysisMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Submit & Pay ₹2,500
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
