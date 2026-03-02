import heroSchool from '@/assets/hero-school.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={heroSchool}
          alt="Élèves utilisant la technologie dans une salle de classe moderne"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Light overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.65) 40%, rgba(255,255,255,0.35) 70%, rgba(255,255,255,0.75) 100%)',
          }}
        />
      </div>

      <div className="section-container relative z-10 pt-[120px] pb-[60px] md:pt-[140px] md:pb-[80px]">
        <div className="max-w-[680px]">
          <p className="text-overline hero-animate hero-delay-1 mb-5">
            SYNAPSE EDUCATION
          </p>
          <h1 className="text-display hero-animate hero-delay-1 mb-6">
            Gestion scolaire
            <br />
            <span className="text-gradient">intelligente.</span>
          </h1>
          <p className="text-body-lg hero-animate hero-delay-2 mb-10 max-w-[520px]">
            La seule plateforme dont votre établissement aura jamais besoin.
            34 modules unifiés, 5 systèmes d'IA, un espace pour chaque acteur.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 hero-animate hero-delay-3">
            <a href="#demo" className="btn-primary w-full sm:w-auto">
              Demander une démo
            </a>
            <a href="#platform" className="btn-text">
              Découvrir la plateforme <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
