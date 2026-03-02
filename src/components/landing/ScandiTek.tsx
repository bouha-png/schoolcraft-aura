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
    <section className="section-padding surface-alt">
      <div ref={ref} className="section-container">
        <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <div>
            <p className="text-overline mb-4">QUI SOMMES-NOUS</p>
            <h2 className="text-section mb-6">
              Qui est <span className="text-gradient">ScandiTek.</span>
            </h2>
            <p className="text-body-lg mb-6">
              Plus de deux décennies d'expertise en IT, télécom, développement produit,
              conduite du changement et enseignement à distance — en provenance de Norvège.
            </p>
            <p className="text-lg italic text-primary font-display">
              "Précision scandinave, adaptée aux réalités du secteur éducatif privé au Maroc."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={i}
                className={`card-elevated p-6 text-center reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: visible ? `${i * 0.12}s` : '0s' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: 'var(--gradient-soft)' }}>
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm mb-1">{v.title}</h3>
                <p className="text-xs text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScandiTek;
