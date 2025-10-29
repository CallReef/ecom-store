'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react'

export const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Information We Collect */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Database className="mr-2 h-5 w-5" />
            Information We Collect
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Personal Information</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Name and contact information (email, phone number)</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Account credentials and preferences</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Usage Information</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Website usage patterns and preferences</li>
              <li>Device information and browser type</li>
              <li>IP address and location data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* How We Use Information */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Eye className="mr-2 h-5 w-5" />
            How We Use Your Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Service Delivery</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Process and fulfill your orders</li>
                <li>Provide customer support</li>
                <li>Send order confirmations and updates</li>
                <li>Manage your account</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Communication</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Send marketing communications (with consent)</li>
                <li>Respond to your inquiries</li>
                <li>Notify you of important changes</li>
                <li>Provide product recommendations</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Improvement</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Analyze website usage and performance</li>
                <li>Improve our products and services</li>
                <li>Conduct research and analytics</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Legal Compliance</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Comply with legal obligations</li>
                <li>Enforce our terms of service</li>
                <li>Protect our rights and interests</li>
                <li>Respond to legal requests</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Protection */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Data Protection & Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Security Measures</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Data Retention</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>We retain data only as long as necessary</li>
                <li>Account data kept while account is active</li>
                <li>Order data retained for legal compliance</li>
                <li>Marketing data until consent is withdrawn</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Your Rights */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lock className="mr-2 h-5 w-5" />
            Your Rights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Access & Control</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Update or correct your data</li>
                <li>Download your data</li>
                <li>Delete your account</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Communication Preferences</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Opt out of marketing emails</li>
                <li>Manage notification preferences</li>
                <li>Control cookie settings</li>
                <li>Request data portability</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cookies */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Cookies and Tracking</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We use cookies and similar technologies to enhance your browsing experience, 
            analyze site traffic, and personalize content. You can control cookie settings 
            through your browser preferences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Essential Cookies</h4>
              <p className="text-sm text-muted-foreground">
                Required for basic website functionality and security.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Analytics Cookies</h4>
              <p className="text-sm text-muted-foreground">
                Help us understand how visitors interact with our website.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Marketing Cookies</h4>
              <p className="text-sm text-muted-foreground">
                Used to deliver relevant advertisements and track campaign performance.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Third Parties */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Third-Party Services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We may share your information with trusted third-party service providers who 
            assist us in operating our website, conducting business, or serving our users.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold">Payment Processors</h4>
                <p className="text-sm text-muted-foreground">
                  Secure payment processing and fraud prevention
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold">Shipping Partners</h4>
                <p className="text-sm text-muted-foreground">
                  Order fulfillment and delivery services
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold">Analytics Providers</h4>
                <p className="text-sm text-muted-foreground">
                  Website performance and user behavior analysis
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            If you have any questions about this Privacy Policy or our data practices, 
            please contact us:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">privacy@ecomstore.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (555) 012-3456</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This Privacy Policy may be updated from time to time. 
              We will notify you of any material changes by posting the new Privacy Policy 
              on this page and updating the "Last updated" date.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
