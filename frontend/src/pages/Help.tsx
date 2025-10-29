'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  HelpCircle, 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown,
  ChevronUp,
  BookOpen,
  Settings,
  CreditCard,
  Package,
  Truck,
  User,
  Shield,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Star,
  Zap
} from 'lucide-react'

export const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    {
      id: 'account',
      title: 'Account & Profile',
      icon: <User className="h-5 w-5" />,
      color: 'text-blue-500'
    },
    {
      id: 'orders',
      title: 'Orders & Shipping',
      icon: <Package className="h-5 w-5" />,
      color: 'text-green-500'
    },
    {
      id: 'payments',
      title: 'Payments & Billing',
      icon: <CreditCard className="h-5 w-5" />,
      color: 'text-purple-500'
    },
    {
      id: 'returns',
      title: 'Returns & Refunds',
      icon: <Truck className="h-5 w-5" />,
      color: 'text-orange-500'
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: <Settings className="h-5 w-5" />,
      color: 'text-red-500'
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: <Shield className="h-5 w-5" />,
      color: 'text-indigo-500'
    }
  ]

  const faqs = [
    {
      id: 'account-1',
      category: 'account',
      question: 'How do I create an account?',
      answer: 'Creating an account is easy! Click the "Sign Up" button in the top right corner, fill in your email address and create a password, then verify your email address. You can also sign up using your Google or Facebook account for faster registration.'
    },
    {
      id: 'account-2',
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'If you forgot your password, click "Forgot Password" on the login page, enter your email address, and we\'ll send you a secure link to reset your password. Make sure to check your spam folder if you don\'t see the email.'
    },
    {
      id: 'orders-1',
      category: 'orders',
      question: 'How can I track my order?',
      answer: 'You can track your order by logging into your account and going to the "Orders" section, or use the tracking number sent to your email. You can also track packages directly on our shipping page using the tracking form.'
    },
    {
      id: 'orders-2',
      category: 'orders',
      question: 'Can I modify or cancel my order?',
      answer: 'You can modify or cancel your order within 30 minutes of placing it, as long as it hasn\'t been processed for shipping. Go to your order details and look for the "Modify" or "Cancel" button. After processing, you\'ll need to contact customer service.'
    },
    {
      id: 'payments-1',
      category: 'payments',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely through encrypted payment gateways.'
    },
    {
      id: 'payments-2',
      category: 'payments',
      question: 'Is my payment information secure?',
      answer: 'Yes, absolutely! We use industry-standard SSL encryption and never store your payment information on our servers. All payments are processed through secure, PCI-compliant payment processors.'
    },
    {
      id: 'returns-1',
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Some items like personalized products or perishables cannot be returned. Visit our Returns page for complete details.'
    },
    {
      id: 'returns-2',
      category: 'returns',
      question: 'How do I start a return?',
      answer: 'To start a return, go to your order history, find the item you want to return, and click "Start Return". You can also use our Returns page to initiate a return by entering your order number and email address.'
    },
    {
      id: 'technical-1',
      category: 'technical',
      question: 'The website is not loading properly. What should I do?',
      answer: 'Try clearing your browser cache and cookies, or try using a different browser. Make sure you have a stable internet connection. If the problem persists, contact our technical support team with details about your browser and device.'
    },
    {
      id: 'technical-2',
      category: 'technical',
      question: 'I\'m having trouble with the mobile app. Can you help?',
      answer: 'Make sure you have the latest version of the app installed. Try closing and reopening the app, or restarting your device. If issues continue, please contact our support team with your device model and operating system version.'
    },
    {
      id: 'security-1',
      category: 'security',
      question: 'How do I know my account is secure?',
      answer: 'We use multiple security measures including SSL encryption, secure password requirements, and optional two-factor authentication. We also monitor for suspicious activity and will notify you if we detect any unusual account access.'
    },
    {
      id: 'security-2',
      category: 'security',
      question: 'What should I do if I suspect unauthorized access?',
      answer: 'Immediately change your password and enable two-factor authentication if you haven\'t already. Contact our security team right away at security@ecomstore.com. We\'ll help secure your account and investigate any suspicious activity.'
    }
  ]

  const quickActions = [
    {
      title: 'Track Your Order',
      description: 'Check the status of your recent orders',
      icon: <Package className="h-6 w-6" />,
      action: 'Track Order',
      href: '/orders'
    },
    {
      title: 'Start a Return',
      description: 'Initiate a return for your purchase',
      icon: <Truck className="h-6 w-6" />,
      action: 'Start Return',
      href: '/returns'
    },
    {
      title: 'Contact Support',
      description: 'Get help from our support team',
      icon: <MessageCircle className="h-6 w-6" />,
      action: 'Contact Us',
      href: '/contact'
    },
    {
      title: 'View Account',
      description: 'Manage your account settings',
      icon: <User className="h-6 w-6" />,
      action: 'My Account',
      href: '/profile'
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Help Center</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Find answers to common questions, get help with your account, 
          and learn how to make the most of our platform.
        </p>
      </div>

      {/* Search Bar */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="mr-2 h-5 w-5" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center mb-3">
                  <div className="text-primary mr-3">
                    {action.icon}
                  </div>
                  <h3 className="font-semibold">{action.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{action.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  {action.action}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Browse by Category
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedCategory === category.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
              >
                <div className="flex items-center">
                  <div className={`mr-3 ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* FAQs */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <HelpCircle className="mr-2 h-5 w-5" />
            Frequently Asked Questions
            {selectedCategory && (
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                ({filteredFAQs.length} results)
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-8">
              <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or browse by category.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="border rounded-lg">
                  <button
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <h3 className="font-semibold">{faq.question}</h3>
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  {expandedFAQ === faq.id && (
                    <div className="px-4 pb-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Popular Articles */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="mr-2 h-5 w-5" />
            Popular Help Articles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold">Getting Started Guide</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to create an account, browse products, and place your first order.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold">Understanding Shipping Options</h3>
                  <p className="text-sm text-muted-foreground">
                    Compare different shipping methods and choose the best option for your needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold">Managing Your Account</h3>
                  <p className="text-sm text-muted-foreground">
                    Update your profile, change password, and manage notification preferences.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold">Troubleshooting Common Issues</h3>
                  <p className="text-sm text-muted-foreground">
                    Solutions for login problems, payment issues, and website errors.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold">Security Best Practices</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep your account secure with strong passwords and two-factor authentication.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold">Mobile App Guide</h3>
                  <p className="text-sm text-muted-foreground">
                    Download and use our mobile app for the best shopping experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="mr-2 h-5 w-5" />
            Still Need Help?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Contact Our Support Team</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-muted-foreground">support@ecomstore.com</p>
                    <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Phone Support</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 012-3456</p>
                    <p className="text-xs text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-sm text-muted-foreground">Available during business hours</p>
                    <p className="text-xs text-muted-foreground">Instant response</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Before You Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Check if your question is answered in our FAQs above
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Have your order number ready if asking about an order
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Describe the issue in detail for faster resolution
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-3">
                <Button>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Start Live Chat
                </Button>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
