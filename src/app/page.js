import ServiceCard from '@/components/ServiceCard'
import PortfolioCard from '@/components/PortfolioCard'
import TestimonialCard from '@/components/TestimonialCard'
import { FaReact, FaNodeJs, FaMobile, FaCloud, FaFire, FaRocket } from 'react-icons/fa'
import { SiNextdotjs, SiMongodb, SiFirebase, SiTailwindcss } from 'react-icons/si'

export const metadata = {
  title: 'KaushalyaTech - Building Digital Products for Startups & Businesses',
  description: 'Professional web and mobile app development agency in India. We help startups and businesses build scalable digital products.',
}

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
              <div className="mt-12 flex flex-wrap gap-8 items-center">
                <div>
                  <p className="text-3xl font-bold gradient-text">50+</p>
                  <p className="text-gray-600">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">100%</p>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">24/7</p>
                  <p className="text-gray-600">Support</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Free Consultation Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</div>
                    Project Requirements Analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</div>
                    Technical Architecture Review
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</div>
                    Timeline & Cost Estimation
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</div>
                    MVP Strategy Planning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl text-center text-gray-500 mb-12">Trusted by startups and established businesses</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
            {['StartupIndia', 'TechMahindra', 'AWS', 'GoogleCloud', 'Microsoft', 'Firebase'].map((logo) => (
              <div key={logo} className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <div className="text-gray-400 font-bold text-lg">{logo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/services" className="btn-primary">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses achieve their digital goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((project, index) => (
              <PortfolioCard key={index} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/portfolio" className="btn-secondary">
              View Full Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by startups and businesses across India
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Digital Product?
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and project estimate within 24 hours
          </p>
          <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all inline-block">
            Start Your Project Today
          </a>
          <p className="text-blue-200 mt-4">No commitment • 30-minute call • Free estimate</p>
        </div>
      </section>
    </>
  )
}