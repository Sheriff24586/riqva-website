import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCode, 
  FaMobileAlt, 
  FaChartLine, 
  FaBullhorn, 
  FaTools, 
  FaPaintBrush,
  FaArrowRight 
  plugins: [react(), tailwindcss()],
  publicDir: ".",
} from 'react-icons/fa';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: FaCode,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies',
      image: '/web-dev.jpg',
      features: [
        'Responsive Design',
        'SEO Optimized',
        'Fast Loading',
        'Secure & Scalable',
      ],
    },
    {
      icon: FaMobileAlt,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications',
      image: '/app-dev.jpg',
      features: [
        'iOS & Android',
        'Cross-Platform',
        'User-Friendly UI',
        'Cloud Integration',
      ],
    },
    {
      icon: FaChartLine,
      title: 'Business Software',
      description: 'Accounting and marketing software solutions',
      image: '/software.jpg',
      features: [
        'Custom Solutions',
        'Data Analytics',
        'Automation',
        'Integration Ready',
      ],
    },
    {
      icon: FaBullhorn,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies',
      image: '/digital-marketing.jpg',
      features: [
        'SEO & SEM',
        'Social Media',
        'Content Strategy',
        'Analytics & Reporting',
      ],
    },
    {
      icon: FaTools,
      title: 'Annual Maintenance',
      description: '24/7 support and maintenance services',
      image: '/maintenance.jpg',
      features: [
        '24/7 Support',
        'Regular Updates',
        'Security Patches',
        'Performance Optimization',
      ],
    },
    {
      icon: FaPaintBrush,
      title: 'UI/UX Development',
      description: 'Beautiful, intuitive user experiences',
      image: '/ui-ux.jpg',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Frontend & Backend',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#0a1f44] font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we offer end-to-end services to bring your 
            digital vision to life with excellence and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onHoverStart={() => setActiveService(index)}
              onHoverEnd={() => setActiveService(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/80 to-transparent" />
                
                {/* Icon */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute top-4 left-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg"
                >
                  <service.icon className="text-2xl text-[#0a1f44]" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0a1f44] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <AnimatePresence>
                  {activeService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4"
                    >
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 bg-[#0a1f44] rounded-full mr-2" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-[#0a1f44] font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More
                  <FaArrowRight className="text-sm" />
                </motion.button>
              </div>

              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-[#0a1f44] rounded-2xl pointer-events-none transition-colors duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Don't see what you're looking for?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#0a1f44] to-[#2c5282] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Request Custom Solution
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
