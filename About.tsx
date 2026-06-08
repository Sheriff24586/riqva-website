import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaRocket, FaUsers, FaAward } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: FaLightbulb,
      title: 'Innovation First',
      description: 'Cutting-edge solutions using the latest technologies',
    },
    {
      icon: FaRocket,
      title: 'Fast Delivery',
      description: 'Agile development with rapid deployment cycles',
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience',
    },
    {
      icon: FaAward,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#0a1f44] font-semibold text-sm uppercase tracking-wider">
            About RIQVA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Your Trusted Technology Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just developers—we're innovators committed to transforming 
            businesses through technology excellence and creative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-[#0a1f44] to-[#2c5282] rounded-xl flex items-center justify-center mb-6"
              >
                <feature.icon className="text-white text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-[#0a1f44] to-[#2c5282] rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Building the Future, One Line of Code at a Time
              </h3>
              <p className="text-blue-100 text-lg mb-6">
                Since our inception, RIQVA has been at the forefront of digital transformation, 
                helping businesses leverage technology to achieve their goals. Our comprehensive 
                suite of services ensures that every aspect of your digital presence is expertly 
                crafted and maintained.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#0a1f44] rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Learn More About Us
              </motion.button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '200+', label: 'Team Members' },
                { value: '24/7', label: 'Support Available' },
                { value: '100%', label: 'Client Focus' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
