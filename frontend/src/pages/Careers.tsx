'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Briefcase, 
  Users, 
  Heart, 
  DollarSign, 
  Clock, 
  MapPin, 
  GraduationCap,
  Zap,
  Shield,
  Coffee,
  Laptop,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Target
} from 'lucide-react'

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)

  const jobOpenings = [
    {
      id: 'frontend-dev',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'We are looking for a talented Frontend Developer to join our engineering team and help build amazing user experiences.',
      requirements: [
        'Proficiency in React, TypeScript, and Next.js',
        'Experience with modern CSS frameworks (Tailwind CSS)',
        'Knowledge of responsive design principles',
        'Experience with version control (Git)',
        'Strong problem-solving skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
    },
    {
      id: 'backend-dev',
      title: 'Backend Developer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Join our backend team to build scalable APIs and microservices that power our e-commerce platform.',
      requirements: [
        'Experience with Node.js, Python, or Go',
        'Knowledge of databases (PostgreSQL, MongoDB)',
        'Experience with cloud platforms (AWS, GCP)',
        'Understanding of microservices architecture',
        'API design and development experience'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Lead product strategy and roadmap for our e-commerce platform, working closely with engineering and design teams.',
      requirements: [
        'Experience in product management',
        'Strong analytical and problem-solving skills',
        'Experience with e-commerce or SaaS products',
        'Excellent communication and leadership skills',
        'Data-driven decision making'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Stock options', 'Learning budget']
    },
    {
      id: 'ux-designer',
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Create intuitive and beautiful user experiences that delight our customers and drive business growth.',
      requirements: [
        'Portfolio demonstrating UX/UI design skills',
        'Experience with design tools (Figma, Sketch)',
        'Understanding of user research methods',
        'Experience with responsive design',
        'Collaborative mindset'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Design tools budget']
    }
  ]

  const companyValues = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication across all departments.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies to solve complex problems.'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Customer Focus',
      description: 'Our customers are at the center of everything we do, driving our product decisions.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices and relationships.'
    }
  ]

  const benefits = [
    {
      icon: <DollarSign className="h-5 w-5" />,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with performance bonuses and equity options'
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: <Coffee className="h-5 w-5" />,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and unlimited PTO policy'
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: 'Learning & Development',
      description: 'Annual learning budget, conference attendance, and skill development programs'
    },
    {
      icon: <Laptop className="h-5 w-5" />,
      title: 'Equipment & Tools',
      description: 'Latest hardware, software licenses, and home office setup allowance'
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: 'Global Impact',
      description: 'Work on products that serve millions of customers worldwide'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're building the future of e-commerce. Come help us create amazing experiences 
          for customers around the world.
        </p>
      </div>

      {/* Company Culture */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="mr-2 h-5 w-5" />
            Our Culture & Values
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 text-primary">
                  {value.icon}
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="mr-2 h-5 w-5" />
            Benefits & Perks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 text-primary mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Job Openings */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Briefcase className="mr-2 h-5 w-5" />
            Open Positions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedJob === job.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <Target className="h-4 w-4 mr-1" />
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{job.description}</p>
                  </div>
                  <ArrowRight className={`h-5 w-5 text-muted-foreground transition-transform ${
                    selectedJob === job.id ? 'rotate-90' : ''
                  }`} />
                </div>

                {selectedJob === job.id && (
                  <div className="mt-4 pt-4 border-t">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Requirements</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Benefits</h4>
                        <ul className="space-y-1">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-3">
                      <Button className="flex-1">
                        Apply Now
                      </Button>
                      <Button variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Application Process */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="mr-2 h-5 w-5" />
            Application Process
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Apply</h3>
              <p className="text-sm text-muted-foreground">
                Submit your application with resume and cover letter
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Review</h3>
              <p className="text-sm text-muted-foreground">
                Our team reviews your application and portfolio
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Interview</h3>
              <p className="text-sm text-muted-foreground">
                Technical and cultural fit interviews with the team
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Decision</h3>
              <p className="text-sm text-muted-foreground">
                We make our decision and extend an offer
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Send us your resume and let us know how you'd like to contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Send Your Resume
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
