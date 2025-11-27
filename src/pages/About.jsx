import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <div className="container mx-auto px-6 mb-32">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold text-center leading-tight mb-12"
        >
          WE DON'T JUST DESIGN.<br />
          <span className="text-brand-yellow">WE DISRUPT.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-400 text-center max-w-3xl mx-auto"
        >
          Pixel & Co is a creative collective for the bold. We partner with ambitious startups to build brands that defy convention and products that shape the future.
        </motion.p>
      </div>

      {/* Image Grid */}
      <div className="w-full overflow-hidden mb-32">
        <div className="flex gap-4 min-w-max animate-blob px-4">
             {[1,2,3,4].map((i) => (
                 <div key={i} className="w-[300px] md:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden">
                     <img src={`https://images.unsplash.com/photo-${i === 1 ? '1522071820081-009f0129c71c' : i === 2 ? '1542744173-8e7e53415bb0' : i === 3 ? '1531403009284-440f080d1e12' : '1556761175-5973dc0f32e7'}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Team" />
                 </div>
             ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-zinc-900 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[ 
              { label: "Projects Shipped", val: "150+" },
              { label: "Awards Won", val: "24" },
              { label: "Team Members", val: "12" },
              { label: "Years Active", val: "5" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl font-display font-bold text-brand-yellow mb-2">{stat.val}</div>
                <div className="text-gray-400 uppercase tracking-widest text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}