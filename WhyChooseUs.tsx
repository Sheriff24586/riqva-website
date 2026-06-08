import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCheckCircle, 
  FaClock, 
  FaShieldAlt, 
  FaHeadset, 
  FaDollarSign, 
  FaStar 
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: FaCheckCircle,
      title: 'Proven Track Record',
      description: '500+ successful projects delivered across various industries',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FaClock,
      title: 'On-Time Delivery',
      description: '98% of projects delivered on or before deadline',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: FaShieldAlt,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and maintenance',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FaDollarSign,
      title: 'Competitive Pricing',
      description: 'Best value for money with flexible payment options',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: FaStar,
      title: 'Award-Winning',
      description: 'Recognized for excellence in software development',
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0a1f44] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2c5282] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#0a1f44] font-semibold text-sm uppercase tracking-wider">
            Why Choose RIQVA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Excellence in Every Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just build software—we create lasting partnerships and deliver 
            solutions that drive real business results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-6"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <reason.icon className="text-white text-2xl" />
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ background: 'transparent' }}
                  whileHover={{
                    background: `linear-gradient(135deg, transparent 0%, rgba(10, 31, 68, 0.1) 100%)`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Process
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0a1f44] via-[#2c5282] to-[#0a1f44] transform -translate-y-1/2" />
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                { step: '01', title: 'Discover', desc: 'Understanding your needs' },
                { step: '02', title: 'Design', desc: 'Crafting the solution' },
                { step: '03', title: 'Develop', desc: 'Building with precision' },
                { step: '04', title: 'Deliver', desc: 'Launch and support' },
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="relative inline-block mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#0a1f44] to-[#2c5282] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl relative z-10">
                      {process.step}
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="absolute inset-0 bg-[#0a1f44] rounded-full blur-lg"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {process.title}
                  </h4>
                  <p className="text-gray-600">
                    {process.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
