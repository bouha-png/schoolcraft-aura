import heroPremium from '@/assets/hero-premium.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background mesh gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, hsla(278, 54%, 40%, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 60%, hsla(260, 60%, 35%, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 90%, hsla(290, 50%, 30%, 0.1) 0%, transparent 40%),
            hsl(240 10% 4%)
          `,
        }}
      />
      {/* Animated glow orbs */}
      <div
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsla(278, 60%, 50%, 0.08) 0%, transparent 70%)',
          animation: 'pulse-glow 6s ease-in-out infinite',
        }}
      />

      <div className="section-container relative z-10 text-center pt-[120px] pb-[60px] md:pt-[160px] md:pb-[80px]">
        <div className="max-w-[900px] mx-auto">
          <p className="text-overline hero-animate hero-delay-1 mb-6">
            SYNAPSE EDUCATION
          </p>
          <h1 className="text-display hero-animate hero-delay-1 mb-6">
            Gestion scolaire intelligente.
            <br />
            <span className="text-gradient">Tout-en-un.</span>
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
        <div className="mt-16 md:mt-24 hero-animate hero-delay-4 relative">
          <div
            className="relative mx-auto rounded-2xl overflow-hidden"
            style={{
              boxShadow: 'var(--shadow-mockup)',
              transform: 'perspective(2000px) rotateX(4deg)',
              maxWidth: '1200px',
            }}
          >
            <img
              src={heroPremium}
              alt="Synapse Education — tableau de bord de gestion scolaire"
              className="w-full h-auto block"
              loading="eager"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
          </div>
          {/* Floor glow */}
          <div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[60%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center bottom, hsla(278, 54%, 50%, 0.12) 0%, transparent 60%)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
