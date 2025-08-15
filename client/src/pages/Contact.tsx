import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactSchema } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import type { z } from 'zod';

type ContactForm = z.infer<typeof insertContactSchema>;

const subjects = [
  'General Inquiry',
  'Appointment Request',
  'Treatment Information',
  'International Patient',
  'Emergency'
];

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactForm>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest('POST', '/api/contacts', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="oxanium-font">
      <Header />
      
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-neutral-800 mb-4">Contact Us</h1>
            <p className="text-xl text-neutral-600">Get in touch for appointments and inquiries</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-neutral-800 mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-800">Phone</div>
                      <div className="text-neutral-600">+91 011 4552 3255</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.52 7.81c-.07-.63-.32-1.15-.75-1.55-.43-.4-.96-.61-1.54-.61-.58 0-1.11.21-1.54.61-.32.3-.54.72-.66 1.19-.18.72-.01 1.54.5 2.26l-1.92 5.27c-.07.18.02.38.2.45.06.02.12.03.18.03.13 0 .25-.08.31-.2l1.92-5.27c.72.33 1.54.33 2.26 0 .43-.2.79-.52 1.05-.94.18-.29.25-.63.25-.98 0-.35-.07-.69-.26-1.26z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-800">WhatsApp</div>
                      <div className="text-neutral-600">+91 98100 34578</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-800">Email</div>
                      <div className="text-neutral-600">info@medcaredwarka.com</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-800">Address</div>
                      <div className="text-neutral-600">Sector 7, Dwarka<br />New Delhi - 110045</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3672304068737!2d77.06891937549919!3d28.588758075688727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ac4df833d47%3A0xdd44be4751b6479d!2sMedcare%20Dwarka!5e0!3m2!1sen!2sin!4v1754669399536!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Medcare Dwarka Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-neutral-800 mb-6">Send us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
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

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem key={subject} value={subject}>
                                {subject}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter your message" 
                            rows={4} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
