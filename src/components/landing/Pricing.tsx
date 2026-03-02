import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

const Pricing = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="pricing" className="section-padding surface-alt">
      <div ref={ref} className="section-container">
        <div className={`max-w-3xl mx-auto text-center reveal ${visible ? 'visible' : ''}`}>
          <p className="text-overline mb-4">TARIFS</p>
          <h2 className="text-section mb-6">
            Un tarif adapté à <span className="text-gradient">vos besoins.</span>
          </h2>
          <p className="text-body-lg mb-10">
            Chaque établissement est unique. Nous analysons vos besoins, votre taille et vos objectifs pour construire l'offre qui vous correspond exactement — sans compromis.
          </p>

          {/* CTA card */}
          <div
            className={`relative rounded-3xl overflow-hidden p-10 md:p-16 reveal ${visible ? 'visible' : ''}`}
            style={{
              background: 'var(--gradient-cta)',
              transitionDelay: '0.2s',
            }}
          >
            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                Demandez votre offre sur mesure
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                Notre équipe vous accompagne pour définir la configuration idéale — modules, nombre d'utilisateurs, intégrations et accompagnement.
              </p>
              <a
                href="#demo"
                className="inline-flex items-center gap-3 bg-white text-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:gap-5 hover:shadow-lg"
              >
                Nous contacter
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            {/* Decorative glow */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl"
              style={{ background: 'hsl(0 0% 100%)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
