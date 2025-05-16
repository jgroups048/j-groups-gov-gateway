
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');
    
    try {
      // Check if all fields are filled
      if (!formData.name || !formData.email || !formData.message) {
        toast({
          title: "Missing information",
          description: "Please fill in all fields",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }
      
      // Save to Supabase
      const { error } = await supabase.from('contacts').insert([formData]);
      
      if (error) throw error;
      
      setFormStatus('success');
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      toast({
        title: "Error sending message",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="py-16 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our team for prompt support.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="input-glow"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="input-glow"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none input-glow"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full button-glow"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : formStatus === 'success' ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Sent Successfully
                </>
              ) : formStatus === 'error' ? (
                <>
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Try Again
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
