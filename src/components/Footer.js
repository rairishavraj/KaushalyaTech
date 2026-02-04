import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">KaushalyaTech</h2>
                <p className="text-sm text-gray-400">Digital Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Building digital products that help startups and businesses grow in the digital age.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook />, href: '#' },
                { icon: <FaTwitter />, href: '#' },
                { icon: <FaLinkedin />, href: '#' },
                { icon: <FaInstagram />, href: '#' },
                { icon: <FaGithub />, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Mobile App Development',
                'Backend Development',
                'Cloud Solutions',
                'AI Integration',
                'MVP Development'
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-gray-400">Email</p>
                <a href="mailto:hello@kaushalyatech.com" className="hover:text-blue-400">
                  hello@kaushalyatech.com
                </a>
              </li>
              <li>
                <p className="text-gray-400">Phone</p>
                <a href="tel:+919876543210" className="hover:text-blue-400">
                  +91 9876543210
                </a>
              </li>
              <li>
                <p className="text-gray-400">Location</p>
                <p>Mumbai, Maharashtra, India</p>
              </li>
              <li>
                <p className="text-gray-400">Working Hours</p>
                <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} KaushalyaTech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white">
                Terms & Conditions
              </Link>
              <span className="text-green-400 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                SSL Secured
              </span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Registered in India • GSTIN: 29ABCDE1234F1Z5
          </p>
        </div>
      </div>
    </footer>
  )
}