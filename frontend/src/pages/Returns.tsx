'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  RotateCcw, 
  Package, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Truck, 
  CreditCard,
  Mail,
  Phone,
  Calendar,
  MapPin,
  FileText,
  Shield,
  ArrowRight,
  X,
  RefreshCw
} from 'lucide-react'

export const Returns: React.FC = () => {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleReturnRequest = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsProcessing(false)
    
    // Reset form
    setOrderNumber('')
    setEmail('')
  }

  const returnSteps = [
    {
      step: 1,
      title: 'Initiate Return',
      description: 'Start your return process online or contact customer service',
      icon: <FileText className="h-5 w-5" />
    },
    {
      step: 2,
      title: 'Package Items',
      description: 'Pack items securely in original packaging with return label',
      icon: <Package className="h-5 w-5" />
    },
    {
      step: 3,
      title: 'Ship Return',
      description: 'Drop off at designated location or schedule pickup',
      icon: <Truck className="h-5 w-5" />
    },
    {
      step: 4,
      title: 'Receive Refund',
      description: 'Get refund processed within 5-10 business days',
      icon: <CreditCard className="h-5 w-5" />
    }
  ]

  const returnPolicies = [
    {
      category: 'Eligible Items',
      items: [
        'Items in original condition with tags attached',
        'Unused items within 30 days of delivery',
        'Defective or damaged items',
        'Items with manufacturing defects',
        'Wrong items sent by us'
      ],
      icon: <CheckCircle className="h-5 w-5 text-green-500" />
    },
    {
      category: 'Non-Returnable Items',
      items: [
        'Personalized or customized items',
        'Perishable goods and food items',
        'Intimate or sanitary products',
        'Items damaged by customer',
        'Items without original packaging'
      ],
      icon: <X className="h-5 w-5 text-red-500" />
    }
  ]

  const refundMethods = [
    {
      method: 'Original Payment Method',
      description: 'Refund will be processed to the same payment method used for purchase',
      timeframe: '5-10 business days',
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      method: 'Store Credit',
      description: 'Receive store credit for future purchases with additional 10% bonus',
      timeframe: '1-2 business days',
      icon: <RefreshCw className="h-5 w-5" />
    },
    {
      method: 'Bank Transfer',
      description: 'Direct transfer to your bank account (for large amounts)',
      timeframe: '7-14 business days',
      icon: <Shield className="h-5 w-5" />
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Returns & Refunds</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We want you to be completely satisfied with your purchase. Our easy return process 
          ensures you can shop with confidence.
        </p>
      </div>

      {/* Quick Return Request */}
      <Card className="mb-8 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center text-blue-800">
            <RotateCcw className="mr-2 h-5 w-5" />
            Start Your Return
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleReturnRequest} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium mb-2">
                  Order Number *
                </label>
                <Input
                  id="orderNumber"
                  type="text"
                  required
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="Enter your order number"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <Button 
              type="submit" 
              disabled={isProcessing}
              className="w-full md:w-auto"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                <>
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Start Return Process
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Return Process */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <RefreshCw className="mr-2 h-5 w-5" />
            How to Return Items
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {returnSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                  {step.icon}
                </div>
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Return Policies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {returnPolicies.map((policy, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {policy.icon}
                <span className="ml-2">{policy.category}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {policy.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Refund Methods */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="mr-2 h-5 w-5" />
            Refund Methods
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {refundMethods.map((method, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <div className="flex justify-center mb-3 text-primary">
                  {method.icon}
                </div>
                <h3 className="font-semibold mb-2">{method.method}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {method.timeframe}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Information */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Important Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Return Timeframe</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Returns must be initiated within 30 days of delivery</li>
                  <li>• Items must be received by us within 14 days of return initiation</li>
                  <li>• Holiday returns extended to 60 days for purchases made Nov 1 - Dec 31</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Return Shipping</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Free return shipping for defective items</li>
                  <li>• Customer pays return shipping for change of mind</li>
                  <li>• Prepaid return labels available for eligible returns</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Return Condition Requirements</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Items must be in original condition with all tags attached</li>
                <li>• Original packaging and accessories must be included</li>
                <li>• Items must be clean and free from damage</li>
                <li>• Shoes must be tried on carpeted surfaces only</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exchange Policy */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <RefreshCw className="mr-2 h-5 w-5" />
            Exchanges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Size Exchanges</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Need a different size? We offer free size exchanges for the same item.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Free shipping for size exchanges</li>
                <li>• Must be same item, different size</li>
                <li>• Available within 30 days of delivery</li>
                <li>• Subject to size availability</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Color/Style Exchanges</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Want a different color or style? Exchange for equal or greater value.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Customer pays price difference if applicable</li>
                <li>• Refund issued for lower-priced items</li>
                <li>• Free return shipping for exchanges</li>
                <li>• Subject to item availability</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            Need Help with Your Return?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Contact Our Support Team</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-muted-foreground">returns@ecomstore.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Phone Support</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 012-3456</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Support Hours</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Return Tracking</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Track your return status and get updates on your refund processing.
              </p>
              <Button variant="outline" className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                Track My Return
              </Button>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>Customer Satisfaction Guarantee:</strong> If you're not completely satisfied 
              with your purchase, we'll work with you to make it right. Our goal is your happiness!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
