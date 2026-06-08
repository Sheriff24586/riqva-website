import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaGithub,
  FaHeart 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Why Us', id: 'why-us' },
  ];

  const services = [
    'Website Development',
    'App Development',
    'Business Software',
    'Digital Marketing',
    'Annual Maintenance',
    'UI/UX Development',
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0a1f44] via-[#1e3a5f] to-[#0a1f44] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="RIQVA" 
                className="w-12 h-12 object-contain mr-3"
              />
              <div>
                <h3 className="text-2xl font-bold">RIQVA</h3>
                <p className="text-blue-200 text-sm">Innovative Solutions</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6">
              Transforming businesses through cutting-edge technology and 
              innovative software solutions. Your success is our mission.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    whileHover={{ x: 5 }}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
              <li>
                <motion.button
                  onClick={() => scrollToSection('testimonials')}
                  whileHover={{ x: 5 }}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Testimonials
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ x: 5 }}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Contact
                </motion.button>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => scrollToSection('services')}
                    whileHover={{ x: 5 }}
                    className="text-blue-100 hover:text-white transition-colors text-left"
                  >
                    {service}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Stay Updated</h4>
            <p className="text-blue-100 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:border-white/40 focus:ring-2 focus:ring-white/20 outline-none transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-white text-[#0a1f44] rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Subscribe
              </motion.button>
            </form>
            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-blue-100">
                📞 24/7 Support Available
              </p>
              <p className="text-white font-semibold mt-1">
                +1 (555) 123-4567
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm text-center md:text-left">
              © {currentYear} RIQVA. All rights reserved. Built with{' '}
              <FaHeart className="inline text-red-400 mx-1" /> by RIQVA Team
            </p>
            <div className="flex gap-6 text-sm">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="text-blue-100 hover:text-white transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="text-blue-100 hover:text-white transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="text-blue-100 hover:text-white transition-colors"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => scrollToSection('hero')}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        viewport={{ once: true }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#0a1f44] to-[#2c5282] text-white rounded-full shadow-lg flex items-center justify-center z-30 hover:shadow-xl transition-all"
      >
        ↑
      </motion.button>
    </footer>
  );
};

export default Footer;
