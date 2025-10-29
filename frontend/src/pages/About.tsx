'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Package, Users, Award, Heart } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Our Store</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're passionate about providing you with the best shopping experience, 
          offering high-quality products at competitive prices with exceptional customer service.
        </p>
      </div>

      {/* Mission & Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardHeader className="text-center">
            <Package className="h-12 w-12 mx-auto mb-4 text-primary" />
            <CardTitle>Quality Products</CardTitle>
            <CardDescription>
              We carefully curate our inventory to ensure every product meets our high standards.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            <CardTitle>Customer First</CardTitle>
            <CardDescription>
              Your satisfaction is our priority. We're here to help with any questions or concerns.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
            <CardTitle>Excellence</CardTitle>
            <CardDescription>
              We strive for excellence in everything we do, from product selection to customer service.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
            <CardTitle>Community</CardTitle>
            <CardDescription>
              We believe in building a community of satisfied customers who love what we offer.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Our Story */}
      <div className="max-w-4xl mx-auto mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Founded with a simple mission: to make quality products accessible to everyone, 
              our e-commerce store has grown from a small startup to a trusted online destination 
              for thousands of customers worldwide.
            </p>
            <p>
              We started with a vision to bridge the gap between quality and affordability, 
              ensuring that everyone has access to products that enhance their daily lives. 
              Our journey began with just a handful of carefully selected items, but our 
              commitment to excellence has never wavered.
            </p>
            <p>
              Today, we're proud to serve customers across the globe, offering a wide range 
              of products that cater to diverse needs and preferences. Our success is built 
              on the trust and loyalty of our customers, and we're committed to maintaining 
              that trust through every interaction.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Fast & Reliable Shipping</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We understand that you want your products quickly. That's why we offer 
                fast, reliable shipping options to get your orders to you as soon as possible.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Easy Returns</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Not satisfied with your purchase? No problem. We offer hassle-free returns 
                within 30 days of purchase, making your shopping experience risk-free.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>24/7 Customer Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our dedicated customer support team is available around the clock to help 
                you with any questions or concerns you may have.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Secure Shopping</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Your security is our priority. We use industry-standard encryption and 
                security measures to protect your personal and payment information.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Have questions about our products or services? We'd love to hear from you!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Email us at <a href="mailto:support@ecomstore.com" className="text-primary hover:underline">support@ecomstore.com</a>
            </p>
            <p className="text-muted-foreground">
              Or call us at <a href="tel:+1-555-0123" className="text-primary hover:underline">+1 (555) 012-3456</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
