import { useState } from 'react';
import { Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const plans = [
  {
    name: 'Essentiel',
    description: 'Pour les petits établissements',
    monthlyPrice: '2 000 DH/mois',
    yearlyPrice: '1 600 DH/mois',
    features: ['Jusqu\'à 500 élèves', '15 modules inclus', 'Support par email', 'Stockage 10 Go', 'Formation initiale'],
    recommended: false,
    cta: 'Commencer',
    ctaStyle: 'outline' as const,
  },
  {
    name: 'Professionnel',
    description: 'Pour les établissements ambitieux',
    monthlyPrice: '5 000 DH/mois',
    yearlyPrice: '4 000 DH/mois',
    features: ['Jusqu\'à 2 000 élèves', '34 modules inclus', '5 systèmes IA', 'Support prioritaire', 'Stockage 100 Go', 'Onboarding complet', 'Intégration MASSAR'],
    recommended: true,
    cta: 'Commencer',
    ctaStyle: 'primary' as const,
  },
  {
    name: 'Entreprise',
    description: 'Multi-établissements & sur mesure',
    monthlyPrice: 'Sur devis',
    yearlyPrice: 'Sur devis',
    features: ['Élèves illimités', '34 modules + personnalisations', 'IA avancée + fine-tuning', 'Interlocuteur dédié', 'Stockage illimité', 'SLA garanti', 'API & webhooks avancés'],
    recommended: false,
    cta: 'Nous contacter',
    ctaStyle: 'outline' as const,
  },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  const { ref, visible } = useScrollReveal();

  return (
    <section id="pricing" className="section-padding bg-background">
      <div ref={ref} className="section-container">
        <div className={`text-center mb-12 md:mb-16 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-overline mb-4">TARIFS</p>
          <h2 className="text-section mb-8">Choisissez <span className="text-gradient">votre formule.</span></h2>

          <div className="inline-flex items-center gap-1 bg-secondary rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                !annual ? 'text-primary-foreground' : 'text-muted-foreground'
              }`}
              style={!annual ? { background: 'var(--gradient-cta)' } : {}}
            >
              Mensuel
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                annual ? 'text-primary-foreground' : 'text-muted-foreground'
              }`}
              style={annual ? { background: 'var(--gradient-cta)' } : {}}
            >
              Annuel
              <span className="text-xs bg-background text-primary px-2 py-0.5 rounded-full font-bold">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`card-elevated p-8 md:p-10 relative flex flex-col reveal ${visible ? 'visible' : ''} ${
                plan.recommended ? 'ring-2 ring-primary scale-[1.02]' : ''
              }`}
              style={{ transitionDelay: visible ? `${i * 0.15}s` : '0s' }}
            >
              {plan.recommended && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-primary-foreground text-xs font-bold rounded-full"
                  style={{ background: 'var(--gradient-cta)' }}
                >
                  Recommandé
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              <p className="font-display text-2xl font-bold text-foreground mb-8">
                {annual ? plan.yearlyPrice : plan.monthlyPrice}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.recommended ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className="text-sm text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#demo"
                className={plan.ctaStyle === 'primary' ? 'btn-primary text-center' : 'btn-outline text-center'}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
