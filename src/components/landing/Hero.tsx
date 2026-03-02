import heroDashboard from '@/assets/hero-dashboard.png';

const Hero = () => {
  return (
    <section className="pt-[140px] pb-[60px] md:pt-[180px] md:pb-[100px] bg-background">
      <div className="section-container text-center">
        {/* Text content */}
        <div className="max-w-[800px] mx-auto">
          <p className="text-overline hero-animate hero-delay-1 mb-6">
            SYNAPSE EDUCATION
          </p>
          <h1 className="text-display hero-animate hero-delay-1 mb-6">
            Gestion scolaire intelligente.
            <br />
            Tout-en-un.
          </h1>
          <p className="text-body-lg max-w-[600px] mx-auto hero-animate hero-delay-2 mb-10">
            La seule plateforme dont votre établissement aura jamais besoin.
            34 modules unifiés, 5 systèmes d'IA, un espace pour chaque acteur.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-animate hero-delay-3">
            <a href="#demo" className="btn-primary w-full sm:w-auto">
              Demander une démo
            </a>
            <a href="#platform" className="btn-text">
              Découvrir la plateforme <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Product mockup */}
        <div className="mt-16 md:mt-20 hero-animate hero-delay-4 relative">
          <div
            className="relative mx-auto rounded-xl overflow-hidden"
            style={{
              boxShadow: 'var(--shadow-mockup)',
              transform: 'perspective(2000px) rotateX(4deg)',
              maxWidth: '1200px',
            }}
          >
            <img
              src={heroDashboard}
              alt="Synapse Education — tableau de bord de gestion scolaire"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
          {/* Subtle glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center bottom, rgba(119,47,159,0.05) 0%, transparent 60%)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
