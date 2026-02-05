'use client'

import ServiceCard from '@/components/ServiceCard'
import PortfolioCard from '@/components/PortfolioCard'
import TestimonialCard from '@/components/TestimonialCard'
import { FaReact, FaNodeJs, FaMobile, FaCloud, FaFire, FaRocket } from 'react-icons/fa'
import { SiNextdotjs, SiMongodb, SiFirebase, SiTailwindcss } from 'react-icons/si'

export default function Home() {
  const services = [
    {
      icon: <FaReact className="text-blue-500" size={32} />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications using React, Next.js, and Tailwind CSS.',
      features: ['Custom Websites', 'E-commerce Solutions', 'Web Applications', 'SEO Optimized']
    },
    {
      icon: <FaMobile className="text-green-500" size={32} />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'iOS & Android', 'App Store Deployment']
    },
    {
      icon: <FaNodeJs className="text-green-600" size={32} />,
      title: 'Backend & API Development',
      description: 'Scalable backend systems and RESTful APIs for your applications.',
      features: ['Node.js', 'Express.js', 'REST APIs', 'Microservices']
    },
    {
      icon: <FaCloud className="text-purple-500" size={32} />,
      title: 'Cloud & Firebase',
      description: 'Cloud infrastructure setup, Firebase integration, and deployment solutions.',
      features: ['Firebase', 'AWS', 'Google Cloud', 'Serverless']
    },
    {
      icon: <FaFire className="text-orange-500" size={32} />,
      title: 'AI Integration',
      description: 'Intelligent features and AI-powered solutions for your applications.',
      features: ['Chatbots', 'Machine Learning', 'Data Analytics', 'Automation']
    },
    {
      icon: <FaRocket className="text-red-500" size={32} />,
      title: 'MVP for Startups',
      description: 'Minimum Viable Product development to validate your startup idea quickly.',
      features: ['Rapid Development', 'Cost-Effective', 'Scalable Architecture', 'Investor Ready']
    }
  ]

  const portfolioItems = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Complete online shopping platform with admin dashboard',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/images/portfolio/ecommerce.jpg'
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile App',
      description: 'React Native app for food ordering and delivery',
      tech: ['React Native', 'Firebase', 'Redux', 'Google Maps'],
      image: '/images/portfolio/food-app.jpg'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Application',
      description: 'Analytics dashboard for B2B SaaS product',
      tech: ['React', 'D3.js', 'Express.js', 'PostgreSQL'],
      image: '/images/portfolio/saas.jpg'
    }
  ]

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'CEO, StartupName',
      content: 'KaushalyaTech delivered our MVP in record time. Their technical expertise and communication were outstanding.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Founder, TechCompany',
      content: 'Professional team that understood our requirements perfectly. The app they built exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      role: 'CTO, E-commerce Brand',
      content: 'Reliable and skilled developers. They handled our complex backend requirements with ease.',
      rating: 5
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Building Digital Products for{' '}
                <span className="gradient-text">Startups & Businesses</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We transform ideas into scalable digital solutions. Full-stack development, AI integration, and cloud services for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn-primary text-center">
                  Book Free Consultation
                </a>
                <a href="/portfolio" className="btn-secondary text-center">
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-white">
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </>
  )
}
