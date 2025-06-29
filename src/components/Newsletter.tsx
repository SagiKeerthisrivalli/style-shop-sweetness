
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Stay in Style</h2>
          <p className="text-xl text-pink-100 mb-8">
            Subscribe to our newsletter and be the first to know about new arrivals, 
            exclusive offers, and style tips.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-0 text-gray-900 px-6 py-3 rounded-full"
              required
            />
            <Button 
              type="submit"
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-pink-100 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
