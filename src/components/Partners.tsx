import { motion } from 'motion/react';
import { PARTNERS } from '../constants';

export default function Partners() {
  return (
    <section id="partenaires" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gold mb-4">Écosystème</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase">Nos Partenaires</h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative grayscale hover:grayscale-0 transition-all duration-500"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-12 object-contain opacity-50 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
