import { motion } from 'motion/react';
import { SPONSORS } from '../constants';

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gold mb-4">Soutiens</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase">Nos Sponsors</h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
          {SPONSORS.map((sponsor, i) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                referrerPolicy="no-referrer"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
