import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: "Brand Identity",
    description: "We build brands that demand attention. From logos to comprehensive design systems.",
    tags: ["Logo Design", "Brand Guidelines", "Typography", "Voice & Tone"]
  },
  {
    title: "Web Development",
    description: "Custom coded websites that are fast, secure, and built to convert.",
    tags: ["React / Next.js", "eCommerce", "CMS Integration", "WebGL"]
  },
  {
    title: "Motion Graphics",
    description: "Adding life to static interfaces with fluid animations and micro-interactions.",
    tags: ["2D/3D Animation", "Interaction Design", "Explainer Videos", "Lottie"]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-6xl md:text-8xl font-display font-bold mb-20"
        >
          OUR <span className="text-brand-yellow">EXPERTISE</span>
        </motion.h1>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {service.tags.map(tag => (
                    <div key={tag} className="flex items-center gap-2 text-sm font-medium">
                      <CheckCircle2 className="text-brand-yellow w-5 h-5" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className={`aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                <img 
                  src={`https://images.unsplash.com/photo-${index === 0 ? '1600508774643-6b42aa349591' : index === 1 ? '1547658719-da2b51169166' : '1550745165-9bc0b252726f'}?auto=format&fit=crop&q=80&w=1000`} 
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500" 
                  alt={service.title} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}