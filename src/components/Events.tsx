import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { EVENTS } from '../constants';

export default function Events() {
  return (
    <section id="evenements" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gold mb-4">Calendrier</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase">Prochains Événements</h3>
          </div>
          <p className="text-white/40 max-w-md text-sm">
            Ne manquez pas votre chance de briller. Inscrivez-vous aux prochains duels organisés dans toute la France.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative glass-card rounded-3xl overflow-hidden hover:border-gold/50 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-xs font-bold text-gold uppercase tracking-wider">
                    <Calendar size={14} className="mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-xs font-bold text-white/60 uppercase tracking-wider">
                    <MapPin size={14} className="mr-2" />
                    {event.location}
                  </div>
                </div>
                
                <h4 className="text-2xl font-black uppercase mb-4 group-hover:text-gold transition-colors">
                  {event.title}
                </h4>
                
                <p className="text-sm text-white/40 mb-8 line-clamp-2">
                  {event.description}
                </p>
                
                <a 
                  href={`https://wa.me/33622853442?text=${encodeURIComponent("Bonjour, j'aimerais avoir plus de renseignement sur cette evenement.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white/10 hover:bg-gold hover:text-black text-white font-bold uppercase tracking-widest text-xs rounded-xl transition-all flex items-center justify-center group/btn"
                >
                  Plus de renseignements
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
