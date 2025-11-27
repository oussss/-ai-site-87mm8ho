import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Globe, Layers } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-brand-yellow/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 z-10 text-center">
          <motion.div 
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="text-brand-yellow text-sm font-medium tracking-wider uppercase">Digital Agency for Startups</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none tracking-tighter mb-8">
              CRAFTING <br />
              <span className="text-stroke">DIGITAL LEGACIES</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              We turn ideas into unforgettable digital experiences. Bold branding, immersive web design, and motion that moves people.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/contact" className="group inline-flex items-center gap-2 bg-brand-yellow text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Work Preview / Parallax Section */}
      <section className="py-32 bg-zinc-950" ref={targetRef}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold">Selected <span className="text-brand-yellow">Works</span></h2>
            <Link to="/services" className="text-white hover:text-brand-yellow transition-colors mt-4 md:mt-0 pb-1 border-b border-white/30 hover:border-brand-yellow">View All Services</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <motion.div style={{ y }} className="space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800" 
                  alt="Project 1" 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-brand-yellow font-display text-2xl font-bold">FinTech Revolution</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold">Nova Finance</h3>
              <p className="text-gray-400">Branding & Web Design</p>
            </motion.div>

            <motion.div className="space-y-4 md:pt-32">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" 
                  alt="Project 2" 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-brand-yellow font-display text-2xl font-bold">Abstract Fashion</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold">Lumina Studios</h3>
              <p className="text-gray-400">Motion Graphics & 3D</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { icon: Zap, title: "Lightning Fast", desc: "Optimized performance for zero-lag experiences." },
              { icon: Globe, title: "Global Scale", desc: "Infrastructure designed to handle traffic from anywhere." },
              { icon: Layers, title: "Pixel Perfect", desc: "Obsessive attention to detail in every component." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 border border-white/10 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
              >
                <feature.icon className="w-10 h-10 text-brand-yellow mb-6" />
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}