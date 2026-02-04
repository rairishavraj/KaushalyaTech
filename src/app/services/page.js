import { FaReact, FaNodeJs, FaMobile, FaCloud, FaFire, FaRocket, FaCheck, FaClock } from 'react-icons/fa'
import { SiNextdotjs, SiMongodb, SiFirebase, SiTailwindcss, SiExpress, SiPostgresql } from 'react-icons/si'

export const metadata = {
  title: 'Our Services | Web & App Development Services - KaushalyaTech',
  description: 'Comprehensive web development, mobile app development, backend services, cloud solutions, and MVP development for startups.',
}

const services = [
  {
    title: 'Web Development',
    icon: <FaReact className="text-blue-500" size={40} />,
    problem: 'Need a modern, responsive website that converts visitors into customers?',
    solution: 'We build custom websites and web applications using modern frameworks like Next.js and React.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Redux'],
    timeline: '2-6 weeks',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Fast Loading',
      'Cross-browser Compatibility',
      'Content Management'
    ]
  },
  {
    title: 'Mobile App Development',
    icon: <FaMobile className="text-green-500" size={40} />,
    problem: 'Want to reach customers on their mobile devices with a native experience?',
    solution: 'We develop high-performance mobile applications for iOS and Android using React Native and Flutter.',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
    timeline: '4-12 weeks',
    features: [
      'Native Performance',
      'App Store Deployment',
      'Push Notifications',
      'Offline Support',
      'Social Media Integration'
    ]
  },
  {
    title: 'Backend & API Development',
    icon: <FaNodeJs className="text-green-600" size={40} />,
    problem: 'Need a scalable backend system to power your application?',
    solution: 'We build robust backend systems with RESTful APIs, authentication, and database management.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Redis'],
    timeline: '3-8 weeks',
    features: [
      'RESTful APIs',
      'Authentication & Authorization',
      'Database Design',
      'Microservices',
      'API Documentation'
    ]
  },
  {
    title: 'Cloud & Firebase Solutions',
    icon: <FaCloud className="text-purple-500" size={40} />,
    problem: 'Need reliable cloud infrastructure and real-time features?',
    solution: 'We implement cloud solutions with Firebase, AWS, and Google Cloud for scalability.',
    technologies: ['Firebase', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes'],
    timeline: '2-6 weeks',
    features: [
      'Real-time Database',
      'Cloud Functions',
      'Hosting & Storage',
      'Serverless Architecture',
      'Monitoring & Analytics'
    ]
  },
  {
    title: 'AI Integration',
    icon: <FaFire className="text-orange-500" size={40} />,
    problem: 'Want to add intelligent features to your application?',
    solution: 'We integrate AI capabilities like chatbots, recommendation systems, and data analytics.',
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'ChatGPT', 'Machine Learning'],
    timeline: '4-10 weeks',
    features: [
      'Chatbots & Virtual Assistants',
      'Predictive Analytics',
      'Image/Text Recognition',
      'Recommendation Engines',
      'Process Automation'
    ]
  },
  {
    title: 'MVP for Startups',
    icon: <FaRocket className="text-red-500" size={40} />,
    problem: 'Need to validate your startup idea quickly with a minimum viable product?',
    solution: 'We build MVPs that help you test your concept, gather feedback, and attract investors.',
    technologies: ['Full Stack Development', 'Rapid Prototyping', 'Lean Methodology'],
    timeline: '4-8 weeks',
    features: [
      'Rapid Development',
      'Cost-effective Solutions',
      'Investor-ready Demos',
      'User Feedback Integration',
      'Scalable Architecture'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to help your business grow in the digital landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div>
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 bg-blue-50 rounded-xl">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                  <h3 className="font-semibold text-red-700 mb-2">Problem:</h3>
                  <p className="text-gray-700">{service.problem}</p>
                </div>
                
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                  <h3 className="font-semibold text-green-700 mb-2">Our Solution:</h3>
                  <p className="text-gray-700">{service.solution}</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3">Technologies:</h3>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <FaClock className="text-blue-600 mr-2" />
                    <span className="font-semibold">Timeline:</span>
                    <span className="ml-2">{service.timeline}</span>
                  </div>
                  <a href="/contact" className="btn-primary text-sm">
                    Get Quote
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-center">Key Features</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <FaCheck className="text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Discovery', desc: 'Understand requirements & plan' },
              { step: '2', title: 'Design', desc: 'UI/UX design & prototyping' },
              { step: '3', title: 'Development', desc: 'Agile development & testing' },
              { step: '4', title: 'Deployment', desc: 'Launch & ongoing support' }
            ].map((process) => (
              <div key={process.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}