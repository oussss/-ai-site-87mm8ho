import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-display font-bold mb-8"
            >
              LET'S BUILD <br /><span className="text-brand-yellow">SOMETHING LOUD.</span>
            </motion.h1>
            <p className="text-xl text-gray-400 mb-12">
              Got a vision? We have the tools. Drop us a line and let's turn your idea into a digital reality.
            </p>

            <div className="space-y-8">
              {[ 
                { icon: Mail, text: "hello@pixelandco.agency" },
                { icon: Phone, text: "+1 (555) 000-1234" },
                { icon: MapPin, text: "123 Innovation Dr, Tech City, TC 90210" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-4 text-lg hover:text-brand-yellow transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <item.icon size={20} />
                  </div>
                  {item.text}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.form 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-brand-yellow focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Email</label>
                  <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-brand-yellow focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Service</label>
                <select className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-brand-yellow focus:outline-none transition-colors text-gray-400">
                  <option>Branding</option>
                  <option>Web Design</option>
                  <option>Motion Graphics</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Message</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-brand-yellow focus:outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-yellow text-black font-bold py-4 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}