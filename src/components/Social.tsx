import { motion } from 'motion/react';
import { Ghost, ExternalLink } from 'lucide-react';

export default function Social() {
  return (
    <section id="suivre" className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[40px] p-12 md:p-20 text-center border-yellow-400/20"
        >
          <div className="w-20 h-20 bg-yellow-400 rounded-3xl flex items-center justify-center mx-auto mb-8 premium-shadow shadow-yellow-400/20">
            <Ghost size={40} className="text-black" />
          </div>
          
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400 mb-4">Communauté</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase mb-8">Nous suivre sur Snapchat</h3>
          
          <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto font-light">
            Rejoignez les coulisses, découvrez les moments forts en exclusivité et soyez les premiers informés des nouveaux duels.
          </p>
          
          <a
            href="https://snapchat.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-yellow-400 text-black font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform active:scale-95"
          >
            S'abonner maintenant
            <ExternalLink size={20} className="ml-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
