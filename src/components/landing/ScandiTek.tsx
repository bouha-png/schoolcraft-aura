import { Shield, Target, Globe, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const values = [
  { icon: Shield, title: 'Sécurité', description: 'Protection des données de niveau scandinave.' },
  { icon: Target, title: 'Précision', description: 'Chaque fonctionnalité résout un problème spécifique.' },
  { icon: Globe, title: 'Adaptabilité', description: 'Besoins locaux, architecture internationale.' },
  { icon: CheckCircle, title: 'Responsabilité', description: 'Nous assumons le résultat complet.' },
];

const ScandiTek = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="section-container">
        <div className={`max-w-[680px] mx-auto text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <h2 className="text-section mb-6">Qui est ScandiTek.</h2>
          <p className="text-body-lg mb-6">
            Plus de deux décennies d'expertise en IT, télécom, développement produit,
            conduite du changement et enseignement à distance — en provenance de Norvège.
          </p>
          <p className="text-lg italic text-primary font-display">
            "Précision scandinave, adaptée aux réalités du secteur éducatif privé au Maroc."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className={`text-center reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: visible ? `${i * 0.12}s` : '0s' }}
            >
              <v.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="font-display font-semibold text-foreground mb-1">{v.title}</h3>
              <p className="text-caption">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScandiTek;
