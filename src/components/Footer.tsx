import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-black tracking-tighter mb-6">
              <span className="text-white">DUEL</span>
              <span className="text-gold ml-1">GAGNANT</span>
            </div>
            <p className="text-white/40 max-w-sm font-light leading-relaxed mb-8">
              L'excellence du jeu en groupe. Des défis immersifs, des compétitions intenses et une expérience premium partout en France.
            </p>
            <div className="flex space-x-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-white/40 hover:text-gold transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Accueil', 'Nos partenaires', 'Prochains événements', 'Sponsors'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Légal</h4>
            <ul className="space-y-4">
              {['Mentions Légales', 'Confidentialité', 'CGU', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20 uppercase tracking-widest">
            © {currentYear} DUEL GAGNANT. TOUS DROITS RÉSERVÉS.
          </p>
          <p className="text-xs text-white/20 uppercase tracking-widest">
            DESIGN BY PREMIUM STUDIO
          </p>
        </div>
      </div>
    </footer>
  );
}
