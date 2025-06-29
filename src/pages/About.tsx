
import React from 'react';
import { Heart, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            About Lovable Styles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing you the latest fashion trends with exceptional quality and unbeatable style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-lg bg-pink-50">
            <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Made with Love</h3>
            <p className="text-gray-600">Every piece is carefully selected and crafted with attention to detail and quality.</p>
          </div>
          
          <div className="text-center p-8 rounded-lg bg-purple-50">
            <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Premium Quality</h3>
            <p className="text-gray-600">We partner with trusted suppliers to ensure the highest quality materials and craftsmanship.</p>
          </div>
          
          <div className="text-center p-8 rounded-lg bg-blue-50">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Community First</h3>
            <p className="text-gray-600">Our customers are at the heart of everything we do, and we value your feedback and satisfaction.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2020, Lovable Styles began as a small passion project with a simple mission: to make high-quality, 
              trendy fashion accessible to everyone. We believe that great style shouldn't break the bank, and that everyone 
              deserves to feel confident and beautiful in what they wear.
            </p>
            <p className="text-gray-700 mb-4">
              What started as a small online boutique has grown into a beloved brand trusted by thousands of customers 
              worldwide. We're committed to sustainability, ethical sourcing, and creating fashion that not only looks 
              good but feels good too.
            </p>
            <p className="text-gray-700">
              Today, we continue to curate the latest trends while maintaining our core values of quality, affordability, 
              and exceptional customer service. Thank you for being part of our journey!
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Our team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
