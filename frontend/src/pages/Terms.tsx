'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Scale, AlertTriangle, Shield, CreditCard, Truck, RotateCcw, Ban } from 'lucide-react'

export const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Please read these terms carefully before using our e-commerce platform. 
          By accessing or using our service, you agree to be bound by these terms.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Acceptance of Terms */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Acceptance of Terms
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            By accessing and using this website, you accept and agree to be bound by the terms 
            and provision of this agreement. If you do not agree to abide by the above, 
            please do not use this service.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Important:</strong> These terms constitute a legally binding agreement 
              between you and our company. Please read them carefully.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Use License */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Scale className="mr-2 h-5 w-5" />
            Use License
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground mb-4">
            Permission is granted to temporarily download one copy of the materials on our 
            website for personal, non-commercial transitory viewing only.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">What You May Do:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Browse and purchase products for personal use</li>
                <li>Create and manage your account</li>
                <li>Leave reviews and ratings for products</li>
                <li>Use our customer support services</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">What You May Not Do:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use automated systems to access the website</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Account Terms */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Account Terms
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Account Creation</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining account security</li>
                <li>One account per person or business entity</li>
                <li>You must be at least 18 years old to create an account</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Account Security</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Keep your login credentials confidential</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>You are responsible for all account activity</li>
                <li>We may suspend accounts that violate these terms</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Terms */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="mr-2 h-5 w-5" />
            Payment Terms
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Payment Methods</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>We accept major credit cards and debit cards</li>
                <li>PayPal and other digital payment methods</li>
                <li>All payments are processed securely</li>
                <li>Prices are displayed in your local currency</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Billing & Charges</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>You authorize us to charge your payment method</li>
                <li>All sales are final unless otherwise stated</li>
                <li>Additional fees may apply for certain services</li>
                <li>We reserve the right to change prices at any time</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> All transactions are processed securely through 
              encrypted payment gateways. We do not store your payment information.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Shipping & Delivery */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Truck className="mr-2 h-5 w-5" />
            Shipping & Delivery
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Shipping Information</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>We ship to addresses within our service area</li>
                <li>Delivery times vary by location and shipping method</li>
                <li>You are responsible for providing accurate shipping addresses</li>
                <li>Additional charges may apply for remote locations</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Delivery Terms</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Risk of loss transfers to you upon delivery</li>
                <li>We are not responsible for delays caused by carriers</li>
                <li>Signature may be required for certain deliveries</li>
                <li>Undeliverable packages will be returned to us</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Returns & Refunds */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <RotateCcw className="mr-2 h-5 w-5" />
            Returns & Refunds
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Return Policy</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Returns must be initiated within 30 days of delivery</li>
                <li>Items must be in original condition with tags attached</li>
                <li>Some items are non-returnable (personalized, perishable)</li>
                <li>Return shipping costs are the customer's responsibility</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Refund Process</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Refunds are processed within 5-10 business days</li>
                <li>Refunds will be issued to the original payment method</li>
                <li>Processing fees may be deducted from refunds</li>
                <li>We reserve the right to refuse returns</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prohibited Uses */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Ban className="mr-2 h-5 w-5" />
            Prohibited Uses
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground mb-4">
            You may not use our website for any purpose that is unlawful or prohibited by these terms.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Prohibited Activities</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Violating any applicable laws or regulations</li>
                <li>Transmitting harmful or malicious code</li>
                <li>Attempting to gain unauthorized access</li>
                <li>Interfering with other users' enjoyment</li>
                <li>Collecting user information without consent</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Content Restrictions</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>No offensive, defamatory, or inappropriate content</li>
                <li>No infringement of intellectual property rights</li>
                <li>No spam or unsolicited communications</li>
                <li>No false or misleading information</li>
                <li>No content that promotes illegal activities</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Limitation of Liability */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Limitation of Liability
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground mb-4">
            In no event shall our company, nor its directors, employees, partners, agents, 
            suppliers, or affiliates, be liable for any indirect, incidental, special, 
            consequential, or punitive damages.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold">Service Availability</h4>
                <p className="text-sm text-muted-foreground">
                  We do not guarantee uninterrupted access to our services
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold">Product Information</h4>
                <p className="text-sm text-muted-foreground">
                  We strive for accuracy but cannot guarantee all product information is error-free
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold">Third-Party Services</h4>
                <p className="text-sm text-muted-foreground">
                  We are not responsible for third-party services or external websites
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Changes to Terms */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Changes to Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We reserve the right to modify these terms at any time. We will notify users 
            of any material changes by posting the new terms on this page and updating 
            the "Last updated" date.
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-800">
              <strong>Your continued use</strong> of our service after any changes 
              constitutes acceptance of the new terms.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Legal Department</h4>
              <p className="text-sm text-muted-foreground mb-1">Email: legal@ecomstore.com</p>
              <p className="text-sm text-muted-foreground">Phone: +1 (555) 012-3456</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Customer Support</h4>
              <p className="text-sm text-muted-foreground mb-1">Email: support@ecomstore.com</p>
              <p className="text-sm text-muted-foreground">Phone: +1 (555) 012-3457</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Governing Law:</strong> These terms are governed by and construed 
              in accordance with the laws of [Your Jurisdiction], without regard to 
              conflict of law principles.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}