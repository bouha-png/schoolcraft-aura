import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const questions = [
  { q: 'Combien de temps prend le déploiement ?', a: "Selon la taille de l'établissement, le déploiement complet prend entre 2 et 6 semaines, incluant la formation de vos équipes." },
  { q: 'Comment se passe la migration des données ?', a: 'Notre équipe prend en charge la migration complète : données élèves, historique financier, emplois du temps. Aucune perte de données.' },
  { q: 'Quelle formation est incluse ?', a: 'Chaque plan inclut un onboarding structuré par rôle. Direction, enseignants, personnel administratif — chacun reçoit une formation adaptée.' },
  { q: 'Les données sont-elles sécurisées ?', a: 'Standards scandinaves de protection des données. Hébergement sécurisé, chiffrement de bout en bout, authentification multi-facteurs.' },
  { q: 'Quelles langues sont supportées ?', a: 'Français, arabe (avec support RTL natif) et anglais. Basculement instantané entre les langues.' },
  { q: 'Synapse est-il compatible avec MASSAR ?', a: "Oui. Export des données et bulletins au format MASSAR. Intégration avec les exigences du ministère de l'éducation." },
  { q: "Y a-t-il une application mobile ?", a: "L'ensemble de la plateforme est responsive et accessible depuis tout appareil. Les portails parents et élèves sont optimisés pour mobile." },
  { q: 'Quel support est disponible ?', a: "Support par chat et email inclus dans tous les plans. Le plan Entreprise inclut un interlocuteur dédié et des revues régulières." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section-padding surface-alt">
      <div ref={ref} className="section-container">
        <div className={`text-center mb-12 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-overline mb-4">FAQ</p>
          <h2 className="text-section">Questions <span className="text-gradient">fréquentes.</span></h2>
        </div>

        <div className="max-w-[720px] mx-auto">
          {questions.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border-b border-border reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: visible ? `${i * 0.05}s` : '0s' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                >
                  <span className="font-display text-lg font-medium text-foreground">{item.q}</span>
                  <span className="shrink-0 text-muted-foreground">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    transitionTimingFunction: 'var(--ease-apple)',
                  }}
                >
                  <p className="pb-5 text-base text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
