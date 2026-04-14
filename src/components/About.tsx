import { motion } from 'motion/react';
import { Target, Users, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Users className="text-gold" />,
      title: "Esprit d'Équipe",
      desc: "Des épreuves de groupe pensées pour la cohésion."
    },
    {
      icon: <Target className="text-gold" />,
      title: "Stratégie",
      desc: "Des duels où l'intelligence prime sur la force."
    },
    {
      icon: <Zap className="text-gold" />,
      title: "Adrénaline",
      desc: "Une expérience intense et mémorable."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gold mb-4">Le Concept</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">
            L'Art du Duel <br />
            <span className="text-white/40">Redéfini.</span>
          </h3>
          <p className="text-xl text-white/60 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            DUEL GAGNANT réunit des joueurs venus de toute la France autour d'épreuves de groupe, de duels stratégiques et de défis uniques. Chaque événement est pensé pour offrir une expérience intense, conviviale et mémorable, avec un seul objectif : remporter la victoire.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-wider mb-2">{f.title}</h4>
                  <p className="text-xs text-white/40 leading-relaxed max-w-[200px]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-3xl"
        >
          <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 premium-shadow">
            <img 
              src="https://picsum.photos/seed/duel-concept/1200/675" 
              alt="Duel Concept" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-dark-red/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
