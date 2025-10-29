'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Truck, 
  Package, 
  Clock, 
  MapPin, 
  DollarSign, 
  Shield, 
  Globe,
  CheckCircle,
  AlertTriangle,
  Zap,
  RefreshCw,
  Mail,
  Phone,
  Calendar,
  ArrowRight,
  Star,
  Award
} from 'lucide-react'

export const Shipping: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [isTracking, setIsTracking] = useState(false)

  const handleTracking = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsTracking(true)
    
    // Simulate tracking lookup
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsTracking(false)
  }

  const shippingOptions = [
    {
      name: 'Standard Shipping',
      description: 'Regular delivery within business days',
      timeframe: '5-7 business days',
      cost: 'Free on orders over $50',
      icon: <Truck className="h-5 w-5" />,
      features: ['Tracking included', 'Signature not required', 'Delivery to doorstep']
    },
    {
      name: 'Express Shipping',
      description: 'Faster delivery for urgent orders',
      timeframe: '2-3 business days',
      cost: '$9.99',
      icon: <Zap className="h-5 w-5" />,
      features: ['Priority handling', 'Tracking included', 'Delivery confirmation']
    },
    {
      name: 'Overnight Shipping',
      description: 'Next business day delivery',
      timeframe: '1 business day',
      cost: '$19.99',
      icon: <RefreshCw className="h-5 w-5" />,
      features: ['Express processing', 'Real-time tracking', 'Signature required']
    },
    {
      name: 'International Shipping',
      description: 'Worldwide delivery to most countries',
      timeframe: '7-14 business days',
      cost: 'From $15.99',
      icon: <Globe className="h-5 w-5" />,
      features: ['Customs handling', 'Duty calculation', 'International tracking']
    }
  ]

  const deliveryAreas = [
    {
      region: 'United States',
      coverage: 'All 50 states + territories',
      timeframe: '2-7 business days',
      freeThreshold: '$50',
      icon: <MapPin className="h-5 w-5 text-blue-500" />
    },
    {
      region: 'Canada',
      coverage: 'All provinces and territories',
      timeframe: '5-10 business days',
      freeThreshold: '$75',
      icon: <MapPin className="h-5 w-5 text-red-500" />
    },
    {
      region: 'Europe',
      coverage: 'EU countries + UK',
      timeframe: '7-14 business days',
      freeThreshold: '$100',
      icon: <MapPin className="h-5 w-5 text-green-500" />
    },
    {
      region: 'Asia Pacific',
      coverage: 'Major countries in region',
      timeframe: '10-21 business days',
      freeThreshold: '$125',
      icon: <MapPin className="h-5 w-5 text-purple-500" />
    }
  ]

  const shippingFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Packaging',
      description: 'All items are carefully packaged with protective materials to ensure safe delivery.'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Quality Assurance',
      description: 'Every order is inspected before shipping to ensure you receive perfect items.'
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: 'Easy Returns',
      description: 'Free return shipping for defective items and easy exchange process.'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Reach',
      description: 'We ship to over 50 countries worldwide with reliable delivery partners.'
    }
  ]

  const trackingSteps = [
    {
      step: 1,
      title: 'Order Confirmed',
      description: 'Your order has been received and is being prepared',
      status: 'completed'
    },
    {
      step: 2,
      title: 'Processing',
      description: 'Items are being picked and packaged for shipment',
      status: 'completed'
    },
    {
      step: 3,
      title: 'Shipped',
      description: 'Package is on its way to you with tracking information',
      status: 'current'
    },
    {
      step: 4,
      title: 'Out for Delivery',
      description: 'Package is with local carrier for final delivery',
      status: 'pending'
    },
    {
      step: 5,
      title: 'Delivered',
      description: 'Package has been successfully delivered',
      status: 'pending'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Shipping Information</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Fast, reliable shipping to get your orders to you quickly and safely. 
          We offer multiple delivery options to meet your needs.
        </p>
      </div>

      {/* Package Tracking */}
      <Card className="mb-8 bg-gradient-to-r from-green-50 to-green-100 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center text-green-800">
            <Package className="mr-2 h-5 w-5" />
            Track Your Package
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTracking} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Enter your tracking number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
              />
              <Button 
                type="submit" 
                disabled={isTracking || !trackingNumber.trim()}
                className="sm:w-auto"
              >
                {isTracking ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Tracking...
                  </>
                ) : (
                  <>
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Track Package
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Shipping Options */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Truck className="mr-2 h-5 w-5" />
            Shipping Options
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingOptions.map((option, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="text-primary mr-3">
                    {option.icon}
                  </div>
                  <h3 className="font-semibold">{option.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    {option.timeframe}
                  </div>
                  <div className="flex items-center text-sm">
                    <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                    {option.cost}
                  </div>
                </div>
                <ul className="space-y-1">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Delivery Areas */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Globe className="mr-2 h-5 w-5" />
            Delivery Areas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryAreas.map((area, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <div className="flex justify-center mb-3">
                  {area.icon}
                </div>
                <h3 className="font-semibold mb-2">{area.region}</h3>
                <p className="text-sm text-muted-foreground mb-3">{area.coverage}</p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    {area.timeframe}
                  </div>
                  <div className="flex items-center justify-center">
                    <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                    Free over {area.freeThreshold}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Shipping Features */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="mr-2 h-5 w-5" />
            Why Choose Our Shipping
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Order Processing Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Order Processing Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trackingSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step.status === 'completed' 
                    ? 'bg-green-500 text-white' 
                    : step.status === 'current'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {step.status === 'completed' && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
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
            Important Shipping Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Delivery Requirements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Valid shipping address required for all orders</li>
                  <li>• Someone must be available to receive the package</li>
                  <li>• Signature may be required for high-value items</li>
                  <li>• Packages left unattended are at customer's risk</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Holiday Shipping</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Extended processing times during peak seasons</li>
                  <li>• Some shipping options may be unavailable</li>
                  <li>• International shipping delays possible</li>
                  <li>• Check our holiday schedule for cut-off dates</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Shipping Delays</h3>
              <p className="text-sm text-blue-700">
                While we strive for on-time delivery, factors like weather, carrier delays, 
                or customs processing may affect delivery times. We'll keep you updated 
                if there are any significant delays with your order.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* International Shipping */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Globe className="mr-2 h-5 w-5" />
            International Shipping
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Customs & Duties</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Duties and taxes are the responsibility of the recipient</li>
                  <li>• We provide all necessary customs documentation</li>
                  <li>• Some countries may have import restrictions</li>
                  <li>• Delivery times may be extended due to customs processing</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Prohibited Items</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Certain items cannot be shipped internationally</li>
                  <li>• Check destination country regulations</li>
                  <li>• We'll notify you if items can't be shipped</li>
                  <li>• Alternative arrangements may be available</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            Shipping Support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Need Help with Shipping?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-muted-foreground">shipping@ecomstore.com</p>
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
              <h3 className="font-semibold mb-4">Shipping Guarantee</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We guarantee your order will arrive on time and in perfect condition. 
                If there are any issues with your delivery, we'll make it right.
              </p>
              <div className="flex items-center space-x-2 text-sm text-green-600">
                <Star className="h-4 w-4" />
                <span>99.8% on-time delivery rate</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
